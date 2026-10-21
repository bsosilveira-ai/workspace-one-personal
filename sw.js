
const CACHE = 'wop-shell-a14f5e0d71f6c5d9';
const BASE = "/workspace-one-personal/";
const FILES = ["/workspace-one-personal/","/workspace-one-personal/assets/index-pxeK-ztF.css","/workspace-one-personal/assets/index-QbG7oeJ4.js","/workspace-one-personal/manifest.webmanifest","/workspace-one-personal/icon.svg","/workspace-one-personal/favicon.svg","/workspace-one-personal/favicon.ico","/workspace-one-personal/apple-touch-icon.png","/workspace-one-personal/icon-192.png","/workspace-one-personal/icon-512.png","/workspace-one-personal/icons/personal-star-16.png","/workspace-one-personal/icons/personal-star-32.png","/workspace-one-personal/icons/personal-star-192.png","/workspace-one-personal/icons/personal-star-512.png","/workspace-one-personal/icons/personal-star-apple-152.png","/workspace-one-personal/icons/personal-star-apple-167.png","/workspace-one-personal/icons/personal-star-apple-180.png","/workspace-one-personal/icons/personal-star-maskable-512.png"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('wop-shell-') && key !== CACHE).map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin ||
      !url.pathname.startsWith(BASE) || url.pathname.startsWith('/api/') ||
      url.pathname.startsWith('/__')) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(async () => {
      const shell = await caches.match(BASE);
      return shell || new Response('Abra o aplicativo com internet uma vez para ativar o modo offline.', {status: 503});
    }));
  } else if (FILES.includes(url.pathname)) {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
  }
});