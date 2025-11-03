/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public', // Le Service Worker sera placé ici
    register: true, // Enregistre le Service Worker automatiquement
    skipWaiting: true, // Active la nouvelle version du SW immédiatement
    disable: process.env.NODE_ENV === 'development', // Désactive en mode 'dev' pour accélérer
});

const nextConfig = {
    // Ajoutez ici toutes vos configurations Next.js spécifiques
    reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
