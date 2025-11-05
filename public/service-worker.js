const CACHE_NAME = 'reussitess-cache-v1';
const urlsToCache = [
    // Page principale de l'application
    '/', 
    '/index.html',
    
    // Assets PWA
    '/manifest.json',
    '/icon-192.png',
    
    // Ajoutez l'URL de votre déploiement Vercel pour le cacher
    'https://reussitess-global-pwa-git-master-porinus-projects.vercel.app/'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Mise en cache des ressources');
        return cache.addAll(urlsToCache).catch((error) => {
            console.error('Service Worker: Échec de la mise en cache de certaines URLs', error);
        });
      })
  );
});

// Interception des requêtes (stratégie Cache-First pour les assets)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourne la ressource mise en cache si trouvée
        if (response) {
          return response;
        }

        // Sinon, requiert la ressource via le réseau
        return fetch(event.request).catch(() => {
             // Si le réseau est hors ligne ET la ressource n'est pas dans le cache
        });
      })
  );
});

// Activation du Service Worker et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activation...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
nano public/service-worker.js
