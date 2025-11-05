// API Serverless Vercel pour Amazon Product Advertising API 5.0
const crypto = require('crypto');
const https = require('https');

// Configuration depuis les variables d'environnement Vercel
const config = {
    accessKey: process.env.AMAZON_ACCESS_KEY,
    secretKey: process.env.AMAZON_SECRET_KEY,
    partnerTag: process.env.AMAZON_PARTNER_TAG,
    host: 'webservices.amazon.fr',
    region: 'eu-west-1',
    marketplace: 'www.amazon.fr'
};

// ============================================
// FONCTIONS DE SIGNATURE AWS4
// ============================================

function sign(key, message) {
    return crypto.createHmac('sha256', key).update(message).digest();
}

function getSignatureKey(key, dateStamp, regionName, serviceName) {
    const kDate = sign('AWS4' + key, dateStamp);
    const kRegion = sign(kDate, regionName);
    const kService = sign(kRegion, serviceName);
    const kSigning = sign(kService, 'aws4_request');
    return kSigning;
}

// ============================================
// APPEL API AMAZON PA 5.0
// ============================================

async function callAmazonAPI(operation, payload) {
    return new Promise((resolve, reject) => {
        const method = 'POST';
        const service = 'ProductAdvertisingAPI';
        const target = `com.amazon.paapi5.v1.ProductAdvertisingAPIv1.${operation}`;
        
        // Date et timestamps
        const now = new Date();
        const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
        const dateStamp = amzDate.substr(0, 8);
        
        // Requête canonique
        const canonicalUri = '/paapi5/' + operation.toLowerCase();
        const canonicalHeaders = `content-type:application/json; charset=utf-8\nhost:${config.host}\nx-amz-date:${amzDate}\nx-amz-target:${target}\n`;
        const signedHeaders = 'content-type;host;x-amz-date;x-amz-target';
        
        const payloadHash = crypto.createHash('sha256').update(JSON.stringify(payload)).digest('hex');
        const canonicalRequest = `${method}\n${canonicalUri}\n\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;
        
        // String to sign
        const algorithm = 'AWS4-HMAC-SHA256';
        const credentialScope = `${dateStamp}/${config.region}/${service}/aws4_request`;
        const stringToSign = `${algorithm}\n${amzDate}\n${credentialScope}\n${crypto.createHash('sha256').update(canonicalRequest).digest('hex')}`;
        
        // Signature
        const signingKey = getSignatureKey(config.secretKey, dateStamp, config.region, service);
        const signature = crypto.createHmac('sha256', signingKey).update(stringToSign).digest('hex');
        
        // Header d'autorisation
        const authorizationHeader = `${algorithm} Credential=${config.accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
        
        // Options de requête HTTPS
        const options = {
            hostname: config.host,
            path: canonicalUri,
            method: method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Amz-Date': amzDate,
                'X-Amz-Target': target,
                'Authorization': authorizationHeader,
                'Content-Length': Buffer.byteLength(JSON.stringify(payload))
            }
        };
        
        // Appel HTTPS
        const req = https.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (e) {
                    reject(new Error('Erreur de parsing JSON: ' + e.message));
                }
            });
        });
        
        req.on('error', (e) => {
            reject(new Error('Erreur de requête: ' + e.message));
        });
        
        req.write(JSON.stringify(payload));
        req.end();
    });
}

// ============================================
// PARSER LES RÉSULTATS AMAZON
// ============================================

function parseAmazonResults(data) {
    if (!data.SearchResult || !data.SearchResult.Items) {
        return [];
    }
    
    return data.SearchResult.Items.map(item => {
        const product = {
            title: item.ItemInfo?.Title?.DisplayValue || 'Produit sans titre',
            price: 'Prix non disponible',
            rating: '',
            image: 'https://via.placeholder.com/300x300?text=Image+indisponible',
            isPrime: false,
            url: item.DetailPageURL || `https://www.amazon.fr?tag=${config.partnerTag}`
        };
        
        // Prix
        if (item.Offers?.Listings?.[0]?.Price?.DisplayAmount) {
            product.price = item.Offers.Listings[0].Price.DisplayAmount;
        }
        
        // Image
        if (item.Images?.Primary?.Large?.URL) {
            product.image = item.Images.Primary.Large.URL;
        } else if (item.Images?.Primary?.Medium?.URL) {
            product.image = item.Images.Primary.Medium.URL;
        }
        
        // Prime
        if (item.Offers?.Listings?.[0]?.DeliveryInfo?.IsPrimeEligible) {
            product.isPrime = true;
        }
        
        // Notes
        if (item.CustomerReviews?.StarRating?.Value) {
            const stars = '⭐'.repeat(Math.round(item.CustomerReviews.StarRating.Value));
            const count = item.CustomerReviews.Count || 0;
            product.rating = `${stars} (${count} avis)`;
        }
        
        return product;
    });
}

// ============================================
// HANDLER PRINCIPAL VERCEL
// ============================================

export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }
    
    // Vérification des variables d'environnement
    if (!config.accessKey || !config.secretKey || !config.partnerTag) {
        return res.status(500).json({ 
            error: 'Configuration API manquante. Vérifiez vos variables d\'environnement dans Vercel.',
            details: {
                hasAccessKey: !!config.accessKey,
                hasSecretKey: !!config.secretKey,
                hasPartnerTag: !!config.partnerTag
            }
        });
    }
    
    try {
        const { action, keywords, searchIndex } = req.body;
        
        // Payload de base pour l'API Amazon
        let payload = {
            PartnerTag: config.partnerTag,
            PartnerType: 'Associates',
            Marketplace: config.marketplace,
            Resources: [
                'Images.Primary.Large',
                'Images.Primary.Medium',
                'ItemInfo.Title',
                'Offers.Listings.Price',
                'Offers.Listings.DeliveryInfo.IsPrimeEligible',
                'CustomerReviews.StarRating',
                'CustomerReviews.Count'
            ],
            ItemCount: 12
        };
        
        // Action : Recherche par mots-clés
        if (action === 'search' && keywords) {
            payload.Keywords = keywords;
        } 
        // Action : Recherche par catégorie
        else if (action === 'category' && searchIndex) {
            payload.SearchIndex = searchIndex;
            payload.SortBy = 'Relevance';
        } 
        else {
            return res.status(400).json({ error: 'Paramètres invalides' });
        }
        
        // Appel API Amazon
        const data = await callAmazonAPI('SearchItems', payload);
        
        // Gestion des erreurs API Amazon
        if (data.Errors) {
            console.error('Erreur API Amazon:', data.Errors);
            return res.status(400).json({ 
                error: 'Erreur Amazon API: ' + (data.Errors[0]?.Message || 'Erreur inconnue')
            });
        }
        
        // Parser et renvoyer les produits
        const products = parseAmazonResults(data);
        
        return res.status(200).json({ 
            success: true,
            products: products,
            count: products.length
        });
        
    } catch (error) {
        console.error('Erreur serveur:', error);
        return res.status(500).json({ 
            error: 'Erreur lors de la récupération des produits',
            details: error.message 
        });
    }
}
    ```

---

## 💾 Procédure de Sauvegarde

1.  **Sauvegardez :** Appuyez sur `Ctrl+X`.
2.  **Confirmez :** Tapez `O` (pour Oui).
3.  **Finalisez :** Appuyez sur `Entrée`.

**Maintenant que vous avez corrigé `vercel.json` et confirmé le contenu de `api/amazon.js`, vous pouvez effectuer le dernier déploiement :**

```bash
git add .
git commit -m "fix: Final syntax and content check before redeployment"
git push origin master
