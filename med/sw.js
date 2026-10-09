/* MedED Resources PWA service worker. Scope is intentionally limited to /med/. */
const CACHE_VERSION = "meded-shell-v1";
const SHELL_CACHE = CACHE_VERSION;
const RESOURCE_CACHE = "meded-resource-index-v1";
const SHELL_URLS = [
  "/med/",
  "/med/offline.html",
  "/med/manifest.webmanifest",
  "/med/icons/meded.svg"
];
const RESOURCE_INDEX_URL = "https://theupshift.github.io/clinical-rhythm-index.json";

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    await cache.addAll(SHELL_URLS);
    // Warm the resource index when CORS permits; the app can then search it offline.
    try {
      const response = await fetch(RESOURCE_INDEX_URL, { mode: "cors", cache: "no-store" });
      if (response.ok && response.type !== "opaque") {
        const indexCache = await caches.open(RESOURCE_CACHE);
        await indexCache.put(RESOURCE_INDEX_URL, response.clone());
      }
    } catch (_) {
      // The online app remains usable; the index will be cached on a later successful request.
    }
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith("meded-") && key !== SHELL_CACHE && key !== RESOURCE_CACHE).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET") return;

  if (url.href === RESOURCE_INDEX_URL) {
    event.respondWith((async () => {
      const cache = await caches.open(RESOURCE_CACHE);
      try {
        const response = await fetch(request);
        if (response.ok && response.type !== "opaque") await cache.put(request, response.clone());
        return response;
      } catch (_) {
        return (await cache.match(request)) || Response.error();
      }
    })());
    return;
  }

  if (url.origin !== self.location.origin || !url.pathname.startsWith("/med/")) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(SHELL_CACHE);
          await cache.put(request, response.clone());
        }
        return response;
      } catch (_) {
        const cache = await caches.open(SHELL_CACHE);
        return (await cache.match(request)) || (await cache.match("/med/")) || (await cache.match("/med/offline.html"));
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(SHELL_CACHE);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    } catch (_) {
      return cached || Response.error();
    }
  })());
});
