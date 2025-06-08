const CACHE   = 'love-confession-v1';
const ASSETS  = [
  './',
  './love_confession.html',
  './manifest.json',
  './cover.jpg',
  './日落沙滩后 - 余佳运.mp3',
  './日落沙滩后 - 余佳运.lrc'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => res || fetch(evt.request))
  );
});