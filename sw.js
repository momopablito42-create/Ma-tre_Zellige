const CACHE_NAME = 'daguerre-forge-v19';
const ASSETS = [
'./',
'./index.html',
'./manifest.json'
];

// Phase 1 : Installation
self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
);
});

// Phase 2 : Interception du réseau (Magie Offline)
self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request).then(response => {
// Retourne la version en cache, ou va chercher sur internet
return response || fetch(event.request);
})
);
});