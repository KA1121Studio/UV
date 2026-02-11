importScripts('./uv.bundle.js');
importScripts('./uv.config.js');
importScripts('./uv.sw.js');

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

const uv = new UVServiceWorker();

self.addEventListener('fetch', event => {
  event.respondWith(uv.fetch(event));
});
