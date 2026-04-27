const CACHE_NAME = 'cuttech-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/cuttech-redesign.css',
  '/assets/cuttech-redesign.js',
  '/assets/cuttech-inner.js',
  '/assets/cuttech-tracking.js',
  '/wp-content/uploads/2024/11/logo-website-logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => 
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.status === 200) {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
      }
      return res;
    })).catch(() => caches.match('/index.html'))
  );
});
