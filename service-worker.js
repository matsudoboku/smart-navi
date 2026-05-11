const CACHE = "navi-cache-v1";

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE).then(cache=>{
      return cache.addAll([
        "./",
        "./index.html",
        "./map.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request))
  );
});
