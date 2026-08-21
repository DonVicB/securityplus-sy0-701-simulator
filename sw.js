const CACHE='securityplus701-v14';
const ASSETS=['./','./index.html','./styles.css','./exam-1.js','./exam-2.js','./exam-3.js','./exam-4.js','./exam-5.js','./app-1.js','./app-2.js','./app-3.js','./app-4.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

