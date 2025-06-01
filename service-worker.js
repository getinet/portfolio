const CACHE_NAME = 'getinet-portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/built/screen.css',
  '/public/cards.min',
  '/assets/built/main.min.js',
  '/public/cards.min.js',
  '/assets/images/branding/icon-192.png',
  '/assets/images/branding/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
