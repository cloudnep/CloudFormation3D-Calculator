const CACHE = 'cf3d-calc-v1';
const ASSETS = ['./','index.html','manifest.json','fonts/fonts.css',
  'fonts/space-mono-latin-400-normal.woff2','fonts/space-mono-latin-700-normal.woff2',
  'fonts/dm-sans-latin-300-normal.woff2','fonts/dm-sans-latin-400-normal.woff2',
  'fonts/dm-sans-latin-500-normal.woff2','fonts/dm-sans-latin-600-normal.woff2',
  'vendor/html2canvas.min.js','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
