
const CACHE_NAME = 'rep-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('stream')) return; // Ne pas cacher le flux audio
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
