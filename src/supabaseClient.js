import { createClient } from '@supabase/supabase-js';

// Récupère les variables d'environnement Vercel (disponibles côté client grâce à NEXT_PUBLIC_)
const supabaseUrl = 'https://apymvfqufjqkatcrduqb.supabase.co'; 
// NOTE: L'URL du projet est fixe, utilisant votre référence de projet

// La clé publique est lue à partir de la variable Vercel/environnement local
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; 

// Initialise le client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Vous pouvez maintenant importer 'supabase' dans n'importe quel composant.
