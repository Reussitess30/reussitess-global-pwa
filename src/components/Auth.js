// src/components/Auth.js

import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Le fichier que nous avons créé précédemment

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Pour basculer entre Inscription et Connexion

  const handleAuth = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      if (isSignUp) {
        // Logique d'Inscription (Sign Up)
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert('Vérifiez votre e-mail pour confirmer l\'inscription !');
      } else {
        // Logique de Connexion (Sign In)
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        alert('Connexion réussie !');
      }

    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Reussitess Connect</h1>
        <p className="description">{isSignUp ? 'Inscrivez-vous' : 'Connectez-vous'} | De l'Intention à l'Impact Quantifié.</p>
        
        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          
          <button disabled={loading}>
            {loading ? 'Chargement...' : (isSignUp ? 'S\'inscrire' : 'Se connecter')}
          </button>
        </form>

        <button onClick={() => setIsSignUp(!isSignUp)} className="link-button">
          {isSignUp ? 'J\'ai déjà un compte' : 'Besoin d\'un compte ? Inscrivez-vous !'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
