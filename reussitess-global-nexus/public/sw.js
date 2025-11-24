const CACHE_NAME = 'reussitess-v2';
const PRECACHE_URLS = ['/', '/manifest.json', '/icon-192.png', '/icon-512.png', '/offline.html'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(x => x !== CACHE_NAME).map(x => caches.delete(x))))
  );
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request).then(r => {
      if (r.status === 200) {
        caches.open(CACHE_NAME).then(c => c.put(event.request, r.clone()));
      }
      return r;
    }))
  );
});
