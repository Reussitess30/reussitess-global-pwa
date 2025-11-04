import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient'; // Vérifiez le chemin

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Vérifie si une session existe au chargement de la page
    if (!supabase.auth.user()) {
        router.push('/'); // Rediriger si non connecté
        return;
    }
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const user = supabase.auth.user();
    if (!user) return;

    try {
      setLoading(true);
      
      // Récupère le profil de la table 'profiles'
      const { data, error } = await supabase
        .from('profiles')
        .select(`username, full_name, avatar_url`)
        .eq('id', user.id)
        .single(); 

      if (error && error.status !== 406) {
        throw error;
      }

      if (data) {
        setProfile(data);
      }
    } catch (error) {
      console.error('Erreur lors du chargement du profil :', error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push('/'); // Rediriger vers la page d'accueil
    } catch (error) {
      console.error('Erreur de déconnexion :', error.message);
    }
  }

  if (loading) {
    return <p>Chargement du profil...</p>;
  }

  const username = profile?.username || 'Utilisateur';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Bienvenue, {username} !
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Ceci est votre page de profil Reussitess Connect.
      </p>
      
      <button
        onClick={handleSignOut}
        className="mt-10 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
      >
        Déconnexion
      </button>
    </div>
  );
}
