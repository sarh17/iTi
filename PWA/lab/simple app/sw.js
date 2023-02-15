var cacheName = "lab1"
var filesCache =[
    'index.html',
    'sw.js',
    'img/2.jpg',
    'img/err.jpg'
]

//register
if('serviceWorker'in navigator){
    navigator.serviceWorker.register("sw.js")
}

//install
self.addEventListener("install",function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesCache)
        })
    )
})

//activate
self.addEventListener("activate",function(event){
    console.log(event)
})

//fetch
self.addEventListener("fetch",function(event){
    event.respondWith(
        caches.match(event.request).then(function(res){
            return res || fetch(event.request)     
           }).catch(function(err){
            return caches.match("img/err.jpg")
           })
    )
})