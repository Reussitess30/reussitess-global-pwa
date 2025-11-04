



import { useRouter } from 'next/router';
// ...
// À l'intérieur du composant fonctionnel (ex: export default function Home() { ... })
const router = useRouter(); 
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue sur Reussitess® Global PWA !</h1>
      <p>L'application est correctement déployée et la PWA est active.</p>
    </div>
  );
};

export default HomePage;
import React from 'react';
import Head from 'next/head';

const AmazonShops = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boutiques Amazon Mondiales Officielles | Sélection de Produits de Qualité</title>
        <meta name="description" content="Découvrez une sélection exclusive de produits recommandés sur toutes nos boutiques Amazon officielles. Accédez facilement à 14 marchés mondiaux, y compris USA, France, Canada, Inde, et plus." />
        <meta name="keywords" content="boutiques amazon mondiales, produits amazon, affiliation, influenceur, sélection de produits, france, usa, canada, italie, espagne, allemagne, royaume-uni, inde, singapour, australie, belgique, pays-bas, suède, fb942837" />
        <link rel="canonical" href="[VOTRE_URL_PRINCIPALE_DE_CETTE_PAGE]" />
        <meta property="og:title" content="Boutiques Amazon Mondiales Officielles" />
        <meta property="og:description" content="Découvrez une sélection exclusive de produits recommandés sur toutes nos boutiques Amazon officielles." />
        <meta property="og:type" content="website" />
        
        {/* STYLE CSS EN LIGNE */}
        <style dangerouslySetInnerHTML={{__html: `
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                max-width: 1000px;
                margin: 0 auto;
                padding: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
            }
            .container {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
                padding: 30px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            }
            h1 {
                text-align: center;
                color: #333;
                margin-bottom: 30px;
                font-size: 2.5em;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
            }
            .section-title {
                font-size: 1.5em;
                color: white;
                margin: 30px 0 20px 0;
                padding: 15px;
                background: linear-gradient(45deg, #ff9500, #ffb84d);
                border-radius: 10px;
                text-align: center;
                font-weight: bold;
            }
            .countries-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 20px;
                margin: 20px 0;
            }
            .country-card {
                background: white;
                padding: 25px;
                border-radius: 15px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                border: 2px solid transparent;
            }
            .country-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 35px rgba(0,0,0,0.15);
                border-color: #ff9500;
            }
            .flag {
                font-size: 1.8em;
                margin-right: 8px;
            }
            .country-name {
                font-size: 1.4em;
                font-weight: bold;
                color: #333;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
            }
            .description {
                margin: 15px 0;
                color: #555;
                font-size: 1em;
                line-height: 1.5;
            }
            .shop-link {
                display: inline-block;
                background: linear-gradient(45deg, #ff9500, #ffb84d);
                color: white;
                text-decoration: none;
                padding: 14px 24px;
                border-radius: 25px;
                font-weight: bold;
                margin: 15px 0;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(255,149,0,0.3);
                text-align: center;
                width: 100%;
                box-sizing: border-box;
            }
            .shop-link:hover {
                background: linear-gradient(45deg, #e6860a, #ff9500);
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(255,149,0,0.4);
                color: white;
            }
            .disclaimer {
                font-style: italic;
                color: #666;
                font-size: 0.9em;
                margin-top: 15px;
                border-top: 1px solid #eee;
                padding-top: 15px;
                line-height: 1.4;
            }
            .hindi-text {
                font-family: 'Noto Sans Devanagari', Arial, sans-serif;
            }
            .multilang {
                margin-bottom: 10px;
            }
            .multilang strong {
                color: #333;
            }
        `}} />
      </Head>

      <div className="container">
        <h1>🌍 Boutiques Amazon Mondiales : Sélections d'Excellence et Innovation</h1>
        
        <main>
            <h2 className="section-title">Sélection Recommandée (Boutiques Personnelles)</h2>
            <div className="countries-grid">
                {/* 1. US */}
                <section className="country-card" id="shop-us">
                    <h3><span className="flag">🇺🇸</span>United States - Amazon.com</h3>
                    <p className="description">Discover my curated **Amazon shop** with top **products** for the USA!</p>
                    <a href="https://amzlink.to/az0LY0DXMG6dR" className="shop-link" target="_blank" rel="nofollow sponsored">Visit USA Shop</a>
                    <p className="disclaimer">As an Amazon Associate, I earn from qualifying purchases.</p>
                </section>

                {/* 2. IT */}
                <section className="country-card" id="shop-it">
                    <h3><span className="flag">🇮🇹</span>Italia - Amazon.it</h3>
                    <p className="description">Scopri il mio **negozio Amazon** con **prodotti selezionati** per l'Italia!</p>
                    <a href="https://amzlink.to/az0tV67jW36S7" className="shop-link" target="_blank" rel="nofollow sponsored">Visita Negozio Italia</a>
                    <p className="disclaimer">Come Affiliato Amazon, ricevo una commissione per acquisti idonei.</p>
                </section>
                
                {/* 3. FR */}
                <section className="country-card" id="shop-fr">
                    <h3><span className="flag">🇫🇷</span>France - Amazon.fr</h3>
                    <p className="description">Découvrez ma **boutique Amazon** avec une **sélection spéciale** pour la France !</p>
                    <a href="https://amzlink.to/az0RLMqtXqC2d" className="shop-link" target="_blank" rel="nofollow sponsored">Visiter Boutique France</a>
                    <p className="disclaimer">En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.</p>
                </section>
                
                {/* 4. ES */}
                <section className="country-card" id="shop-es">
                    <h3><span className="flag">🇪🇸</span>España - Amazon.es</h3>
                    <p className="description">¡Explora mi **tienda Amazon** con **productos destacados** para España!</p>
                    <a href="https://amzlink.to/az085o25FtlRd" className="shop-link" target="_blank" rel="nofollow sponsored">Visitar Tienda España</a>
                    <p className="disclaimer">Como Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.</p>
                </section>
                
                {/* 5. DE */}
                <section className="country-card" id="shop-de">
                    <h3><span className="flag">🇩🇪</span>Deutschland - Amazon.de</h3>
                    <p className="description">Entdecken Sie meinen **Amazon-Shop** mit **ausgewählten Produkten** für Deutschland!</p>
                    <a href="https://amzlink.to/az00VtRPRGpmm" className="shop-link" target="_blank" rel="nofollow sponsored">Deutschland Shop Besuchen</a>
                    <p className="disclaimer">Als Amazon-Partner verdiene ich an qualifizierten Käufen.</p>
                </section>
                
                {/* 6. CA */}
                <section className="country-card" id="shop-ca">
                    <h3><span className="flag">🇨🇦</span>Canada - Amazon.ca</h3>
                    <p className="description">Explore my **Amazon shop** tailored for **Canadian customers**!</p>
                    <a href="https://amzlink.to/az0MvN3FRKKQQ" className="shop-link" target="_blank" rel="nofollow sponsored">Visit Canada Shop</a>
                    <p className="disclaimer">As an Amazon Associate, I earn from qualifying purchases.</p>
                </section>
                
                {/* 7. IN */}
                <section className="country-card" id="shop-in">
                    <h3><span className="flag">🇮🇳</span>भारत (India) - Amazon.in</h3>
                    <p className="description hindi-text">मेरी **Amazon शॉप** पर भारत के लिए **विशेष उत्पाद** देखें!</p>
                    <a href="https://amzlink.to/az0GVe8b9O7cF" className="shop-link" target="_blank" rel="nofollow sponsored">भारत शॉप देखें / Visit India Shop</a>
                    <p className="disclaimer hindi-text">एक Amazon Associate के रूप में, मैं योग्य खरीदारी से कमाता हूँ।<br/>(As an Amazon Associate, I earn from qualifying purchases.)</p>
                </section>
                
                {/* 8. NL */}
                <section className="country-card" id="shop-nl">
                    <h3><span className="flag">🇳🇱</span>Nederland - Amazon.nl</h3>
                    <p className="description">Ontdek mijn **Amazon-winkel** met **topselecties** voor Nederland!</p>
                    <a href="https://amzlink.to/az0G27sb8ZVbI" className="shop-link" target="_blank" rel="nofollow sponsored">Nederland Winkel Bezoeken</a>
                    <p className="disclaimer">Als Amazon-partner verdien ik aan in aanmerking komende aankopen.</p>
                </section>
                
                {/* 9. SE */}
                <section className="country-card" id="shop-se">
                    <h3><span className="flag">🇸🇪</span>Sverige - Amazon.se</h3>
                    <p className="description">Upptäck min **Amazon-butik** med **utvalda produkter** för Sverige!</p>
                    <a href="https://amzlink.to/az0Ig0XgFkR8o" className="shop-link" target="_blank" rel="nofollow sponsored">Besök Sverige Butik</a>
                    <p className="disclaimer">Som Amazon-partner tjänar jag på kvalificerade köp.</p>
                </section>
                
                {/* 10. SG */}
                <section className="country-card" id="shop-sg">
                    <h3><span className="flag">🇸🇬</span>Singapore - Amazon.sg</h3>
                    <p className="description">Explore my **curated Amazon shop** for **Singapore**!</p>
                    <a href="https://amzlink.to/az0b3TpUdq32r" className="shop-link" target="_blank" rel="nofollow sponsored">Visit Singapore Shop</a>
                    <p className="disclaimer">As an Amazon Associate, I earn from qualifying purchases.</p>
                </section>
                
                {/* 11. UK */}
                <section className="country-card" id="shop-uk">
                    <h3><span className="flag">🇬🇧</span>United Kingdom - Amazon.co.uk</h3>
                    <p className="description">Check out my **Amazon shop** with **special picks** for the UK!</p>
                    <a href="https://amzlink.to/az03r8CJgliMq" className="shop-link" target="_blank" rel="nofollow sponsored">Visit UK Shop</a>
                    <p className="disclaimer">As an Amazon Associate, I earn from qualifying purchases.</p>
                </section>
                
                {/* 12. AU */}
                <section className="country-card" id="shop-au">
                    <h3><span className="flag">🇦🇺</span>Australia - Amazon.com.au</h3>
                    <p className="description">Discover my **Amazon store** with **great products** for Australia!</p>
                    <a href="https://amzlink.to/az05kTTrYJ06L" className="shop-link" target="_blank" rel="nofollow sponsored">Visit Australia Store</a>
                    <p className="disclaimer">As an Amazon Associate, I earn from qualifying purchases.</p>
                </section>
                
                {/* 13. BE */}
                <section className="country-card" id="shop-be">
                    <h3><span className="flag">🇧🇪</span>België / Belgique - Amazon.com.be</h3>
                    <p className="description">
                        <div className="multilang"><strong>Nederlands:</strong> Ontdek mijn **Amazon-winkel** speciaal voor België!</div>
                        <div className="multilang"><strong>Français:</strong> Découvrez ma **boutique Amazon** spécialement pour la Belgique !</div>
                    </p>
                    <a href="https://amzlink.to/az08ZB76xWpGm" className="shop-link" target="_blank" rel="nofollow sponsored">Bezoek België Winkel / Visiter Boutique Belgique</a>
                    <p className="disclaimer">Als Amazon-partner verdien ik aan in aanmerking komende aankopen.<br/>En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.</p>
                </section>
                
                {/* 14. BR */}
                <section className="country-card" id="shop-br">
                    <h3><span className="flag">🇧🇷</span>Brasil - Amazon.com.br</h3>
                    <p className="description">Conheça minha **loja na Amazon** com **produtos selecionados** para o Brasil!</p>
                    <a href="https://amzlink.to/az0ymmoCLHvyA" className="shop-link" target="_blank" rel="nofollow sponsored">Visitar Loja Brasil</a>
                    <p className="disclaimer">Como Associado da Amazon, recebo
// Assurez-vous d'avoir 'useRouter' importé en haut du fichier
import { useRouter } from 'next/router';
// ...
const router = useRouter(); // Assurez-vous d'initialiser le routeur

// ... dans votre fonction de soumission de formulaire (handleLogin ou handleSignup)
if (error) {
    alert(error.message);
} else {
    // Redirige l'utilisateur vers la page de profil après connexion/inscription réussie
    router.push('/profile'); 
}
// ... Votre fonction de gestion de l'authentification
const { user, error } = estInscription
    ? await supabase.auth.signUp({ email, password })
    : await supabase.auth.signIn({ email, password });

if (error) {
    alert(error.message); // Affiche l'erreur si elle existe
} else {
    // === LIGNE CRUCIALE À AJOUTER ===
    router.push('/profile'); 
    // ================================
}
