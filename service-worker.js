self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('onebite-store').then(function(cache) {
      return cache.addAll([
        '/',
      ]);
    })
  );
});
