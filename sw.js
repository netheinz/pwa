/**
 * Installer Service Worker
 * Lytter efter install event og tilføjer App Shell filer til cache
 */
self.addEventListener("install", function(e) {
    console.log("Service Worker Installed");
    e.waitUntil(
        caches.open('myapp').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.htm',
                '/assets/css/inline.css',
                '/assets/js/app.js'
            ]);
        })
    );
});

/**
 * SW Fetch - if no match in cache fetch from network and add to cache
 */
self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.open('myapp').then(function(cache) {
            return cache.match(event.request).then(function(response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});
