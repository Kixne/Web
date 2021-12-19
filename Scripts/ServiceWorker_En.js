const CACHE= "KixneWeb_cache_V0",
urlsToCache=[
 "/index.html",
 "/Styles/CustomReset.css",
 "/Styles/BaseStyles.css",
 "/Styles/StylesSmall.css",
 "/Styles/StylesMid.css",
 "/Sources/Fonts/Nunito-Regular.ttf",
 "/Sources/Fonts/Aladin-Regular.ttf",
 "/Sources/Icons/KxIcons-v1.0/fonts/KxIcons.svg",
 "/Sources/Icons/KxIcons-v1.0/KxIcons.css",
 "/Sources/Icons/KxIcons-v1.0/KxIcons.css",
 "/Sources/Icons/KxIcons-v1.0/selection.json",
 "/Scripts/BaseScripts.js",
 "/Scripts/CoursesDataEn.js",
 "https://www.youtube.com/iframe_api",
]

self.addEventListener("install", e=>{
 e.waitUntil(
  caches.open(CACHE)
  .then(cache=>{
   return cache.addAll(urlsToCache)
   .then(()=> self.skipWaiting())
  })
  .catch(err=> console.log("Error during cache registry", err))
 )
})

self.addEventListener("activate", e=>{
 const cacheWhiteList= [CACHE];
 e.waitUntil(
  caches.keys()
  .then(cacheNames=>{
   cacheNames.map(cacheName=>{
    /* Deleting unused cache files */
    if(cacheWhiteList.indexOf(cacheName)=== -1){
     return caches.delete(cacheName)
    }
   })
  })
  /* Activating current cache */
  .then(()=> self.clients.claim())
 )
})

/* When navigator gets an url */
self.addEventListener("fetch", e=>{
 /* Answer with cache or searh the real url */
 e.respondWith(
  caches.match(e.request)
  .then(res=>{
   if(res){
    /* Recover from cache */
    return res
   }
   /* Recover from the request to the url */
   return fetch(e.request)
  })
 )
})