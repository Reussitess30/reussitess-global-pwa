// Service Worker pour Reussitess® Global PWA
const CACHE_NAME = 'reussitess-v1.1.0';
const OFFLINE_PAGE = './offline.html';

// Fichiers à mettre en cache lors de l'installation
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './nexus.html',
  './dashboard.html',
  './login.html',
  './register.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './offline.html'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Mise en cache des ressources');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activation...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stratégie de cache: Network First, fallback to Cache
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-HTTP
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cloner la réponse pour la mettre en cache
        const responseClone = response.clone();
        
        // Ne pas cacher les requêtes POST/PUT/DELETE
        if (event.request.method === 'GET') {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        
        return response;
      })
      .catch(() => {
        // En cas d'échec, chercher dans le cache
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // Si c'est une page HTML, retourner la page offline
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match(OFFLINE_PAGE);
            }
          });
      })
  );
});

// Gestion des notifications push (optionnel)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle mise à jour Reussitess®',
    icon: './icon-192.png',
    badge: './icon-72.png',
    vibrate: [200, 100, 200],
    tag: 'reussitess-notification',
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification('Reussitess® Global', options)
  );
});

// Gestion des clics sur notifications
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('./')
  );
});
