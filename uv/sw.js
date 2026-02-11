importScripts('/uv/uv.sw.js');

const uv = new UVServiceWorker();

self.addEventListener('fetch', event => {
  event.respondWith(uv.fetch(event));
});
