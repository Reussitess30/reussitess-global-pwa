import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient'; // VÉRIFIEZ CE CHEMIN

// =================================================================
// Composant d'Authentification (pour centraliser le formulaire)
// =================================================================

function AuthForm({ router }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Ajout pour gérer Inscription/Connexion

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
        // REDIRECTION SI SUCCÈS (Le point critique corrigé !)
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-mail
          </label>
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
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
            {loading ? 'Chargement...' : (isSignUp ? 'S\'inscrire' : 'Se Connecter')}
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <button
          className="text-sm text-indigo-500 hover:text-indigo-800"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'J\'ai déjà un compte' : 'Je veux m\'inscrire'}
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

  // 1. GESTION DE LA SESSION : Redirige si l'utilisateur est déjà connecté
  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      router.push('/profile');
    }
  }, [router]);


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boutiques Amazon Mondiales Officielles | Sélection de Produits de Qualité</title>
        {/* ... (Le reste de votre balise Head) ... */}
      </Head>

      <div className="container">
        <h1>🌍 Boutiques Amazon Mondiales : Sélections d'Excellence et Innovation</h1>

        {/* 2. AFFICHAGE DU FORMULAIRE D'AUTHENTIFICATION */}
        <AuthForm router={router} />
        
        {/* 3. VOS BOUTIQUES AMAZON (Le code CSS et HTML est réduit ici pour la clarté) */}
        
        <main>
            <h2 className="section-title">Sélection Recommandée (Boutiques Personnelles)</h2>
            
            {/* VOS STYLES CSS EN LIGNE (Assurez-vous qu'ils sont toujours dans la balise <Head>) */}
            {/* J'ai omis le bloc <style> ici pour ne pas dépasser la limite, mais il doit rester dans <Head> */}
            
            <div className="countries-grid">
                {/* 1. US */}
                <section className="country-card" id="shop-us">
                    <h3><span className="flag">🇺🇸</span>United States - Amazon.com</h3>
                    <p className="description">Discover my curated **Amazon shop** with top **products** for the USA!</p>
                    <a href="https://amzlink.to/az0LY0DXMG6dR" className="shop-link" target="_blank" rel="nofollow sponsored">Visit USA Shop</a>
                    <p className="disclaimer">As an Amazon Associate, I earn from qualifying purchases.</p>
                </section>
                
                {/* ... (Ajoutez les 13 autres sections de boutiques ici) ... */}

                {/* Exemple d'une autre boutique (à compléter) */}
                 <section className="country-card" id="shop-fr">
                    <h3><span className="flag">🇫🇷</span>France - Amazon.fr</h3>
                    <p className="description">Découvrez ma **boutique Amazon** avec une **sélection spéciale** pour la France !</p>
                    <a href="https://amzlink.to/az0RLMqtXqC2d" className="shop-link" target="_blank" rel="nofollow sponsored">Visiter Boutique France</a>
                    <p className="disclaimer">En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.</p>
                </section>
            </div>
        </main>
      </div>
    </>
  );
};

export default AmazonShops;
