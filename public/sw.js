const CACHE_NAME = "site-cache-v1";
const CACHE_ASSETS = [
  "/",
  "/index.html",
  "/assets/images/placeholder.webp",
  "/assets/images/thevilla/section0.webp",
  "/assets/images/guesthouse/section0.webp",
  "/assets/images/outdoor/section0.webp",
  "/assets/images/contactus/section1.webp",
  "/assets/images/homepage/section1.webp",
  "/assets/images/homepage/section2x1x1.webp",
  "/assets/images/homepage/section2x1x2.webp",
  "/assets/images/homepage/section2x1x3.webp",
  "/assets/images/homepage/section2x1x4.webp",
  "/assets/images/homepage/section2x2x1.webp",
  "/assets/images/homepage/section2x2x2.webp",
  "/assets/images/homepage/section2x2x3.webp",
  "/assets/images/homepage/section3.webp",
  "/assets/images/homepage/section4x1.webp",
  "/assets/images/homepage/section4x2.webp",
  "/assets/images/homepage/section4x3.webp",
  // "/assets/images/homepage/section5x1.webp",
  // "/assets/images/homepage/section5x2.webp",
  // "/assets/images/homepage/section5x3.webp",
  // "/assets/images/homepage/section5x4.webp",
  "/assets/video/Homepage.mp4",
  "/assets/video/villa-tour.mp4",
  "/assets/video/video-poster.webp"
];

// Cache all images dynamically
const IMAGE_CACHE_URLS = [
  "/assets/images/amenities/",
  "/assets/images/contactus/",
  "/assets/images/floorplan/",
  "/assets/images/guesthouse/",
  "/assets/images/homepage/",
  // "/assets/images/outdoor/",
  "/assets/images/thevilla/",
];

// Install Service Worker & Pre-cache Assets
self.addEventListener("install", (event) => {
  console.log("[SW] Installing Service Worker...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Caching Assets:", CACHE_ASSETS);
      return cache.addAll(CACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate & Clean Old Caches
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating Service Worker...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[SW] Deleting Old Cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Request & Cache Images Dynamically
self.addEventListener("fetch", (event) => {
  console.log("[SW] Fetching:", event.request.url);

  if (IMAGE_CACHE_URLS.some((path) => event.request.url.includes(path))) {
    console.log("[SW] Image Request Detected:", event.request.url);

    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          console.log("[SW] Serving from Cache:", event.request.url);
          return cachedResponse;
        }

        console.log("[SW] Fetching from Network:", event.request.url);
        return fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            console.log("[SW] Caching New Image:", event.request.url);
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  }
});
