import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient'; // VÉRIFIEZ LE CHEMIN VERS SUPABASE CLIENT

// =================================================================
// Composant d'Authentification (pour le formulaire)
// =================================================================
function AuthForm({ router }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); 

  async function handleAuth(e) {
    e.preventDefault();

    try {
      setLoading(true);
      let authFunction;
      
      if (isSignUp) {
        // Logique d'Inscription
        authFunction = supabase.auth.signUp({ email, password });
      } else {
        // Logique de Connexion
        authFunction = supabase.auth.signIn({ email, password });
      }

      const { error } = await authFunction;

      if (error) {
        alert(error.message);
      } else {
        // CORRECTION DE LA REDIRECTION : PASSE À LA PAGE PROFIL
        router.push('/profile'); 
      }
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl max-w-sm mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
        {isSignUp ? 'Inscription' : 'Connexion'} à Reussitess Connect
      </h2>
      <form onSubmit={handleAuth}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="votre@email.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Mot de passe</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Chargement...' : (isSignUp ? "S'inscrire" : 'Se Connecter')}
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <button
          className="text-sm text-indigo-500 hover:text-indigo-800"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "J'ai déjà un compte" : "Je veux m'inscrire"}
        </button>
      </div>
    </div>
  );
}


// =================================================================
// Composant Principal de la Page d'Accueil (index.js)
// =================================================================
const AmazonShops = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // 1. GESTION DE LA SESSION : Redirige si l'utilisateur est déjà connecté
  useEffect(() => {
    setIsClient(true);
    const user = supabase.auth.user();
    if (user) {
      router.push('/profile');
    }
  }, [router]);

  // Si le useEffect n'a pas encore vérifié la session, on affiche rien
  if (!isClient) {
    return null;
  }

  return (
    <>
      <Head>
        {/* ... (votre bloc <Head> complet, y compris les styles CSS en ligne) ... */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boutiques Amazon Mondiales Officielles | Sélection de Produits de Qualité</title>
        {/* VOS STYLES CSS EN LIGNE DOIVENT ÊTRE ICI */}
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

        {/* 2. AFFICHAGE DU FORMULAIRE D'AUTHENTIFICATION */}
        <AuthForm router={router} />
        
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
                
                {/* ... (Ajouter les 11 autres sections de boutiques ici) ... */}

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
            </div>
        </main>
      </div>
    </>
  );
};

export default AmazonShops;
