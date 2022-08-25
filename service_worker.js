//static cache const
const statCache='statv4';
//dynamic cache const
const dynaCache='dynav1';

//storing shell
const assets=['./','./imgs\1307256.jpg','./imgs\Aba.jpg','./imgs\abayagiriya.jpg','./imgs\aid.webp','./imgs\Aru.jpg','./imgs\bak.jpg','./imgs\bamb.jpg','/imgs\batik.jpg','./imgs\BCS.jpg','./imgs\BCS2.jpg','./imgs\beach.jpg','./imgs\bear.jpg','./imgs\bgimg.jpg','./imgs\blue.jpg','./imgs\bov.jpg','./imgs\Bungalow.jpg','/imgs\cl.png','./imgs\deer.jpg','./imgs\deer2.jpg','./imgs\dil2.jpg','./imgs\do.webp','/imgs\dunh.jpg','/imgs\earr.png','./imgs\ehela.jpg','./imgs\ele.jpg','./imgs\ele.png','./imgs\ella.jpg','./imgs\Food.jpg','./imgs\forests.jpg','./imgs\gem.jpg','./imgs\gems.png','./imgs\Hikkaduwa.jpg','./imgs\hil.jpg','./imgs\homestay.jpg','./imgs\hort.jpg','./imgs\image.jpg','./imgs\Kan.jpg','./imgs\lep.jpg','./imgs\mesua.jpg','./imgs\old.jpg','./imgs\old2.jpg','./imgs\orchid1.jpg','./imgs\Pasi.jpg','./imgs\pid.jpg','./imgs\ref.webp','./imgs\S1.jfif','./imgs\S2.jfif','./imgs\S3.png','./imgs\sig7.jpg','./imgs\sinha.jpg','./imgs\spo.webp','./imgs\T1.png','./imgs\T2.png','./imgs\T3.jfif','./imgs\tea.jpg','./imgs\tea.png','./imgs\tiger.jpg','./imgs\tou2.jpg','./imgs\train.jpg','./imgs\tw.jpg','./imgs\lena.jpg','./imgs\vesak.jpg','./imgs\wat.jpg','./imgs\wat2.jpg','./imgs\wata.jpg','./imgs\wata2.jpg','./imgs\whale m.jpg','./imgs\wine.jpg','./imgs\wtr.jpg','./imgs\wtrf.jpg','./imgs\yaka.jpg','./imgs\yakacrop.jpg','./imgs\yakawall.jpg','./imgs\Yapa.jpg','./A.jfif','./android-chrome-192x192.png','./Anew.png','./apple-touch-icon.png','./Assignment.css','./Assignment.html','./Assignment.js','./Assignment2.css','./Assignment2.css','./Assignment2.html','./Assignment3.css','./Assignment4.css','./Assignment3.html','./Assignment4.html','./Assignment4.js','./Assignment5.css','./Assignment5.html','./Assignment6.css','./Assignment6.html','./Assignment7.css','./Assignment7.html','./Assignment8.css','./Assignment8.html','./Assignment9.css','./Assignment9.html','./Assignment10.css','./Assignment10.html','./Assignment10.js','./Assignment11.css','./Assignment11.html','./Assignment13.css','./Assignment13.html','./Assignment13.js','./bcs2n.mp4','./browserconfig.xml','./favicon-16x16.png','./favicon-32x32.png','./favicon.ico','./heritage.mp4','./island.mp4','./manifest.json','./mstile-150x150.png','./safari-pinned-tab.svg','./main.js','./android-chrome-512x512.png','./fallback.css','./fallback.html'];

//the install event
self.addEventListener('install',(evt)=>{
    //console.log("Service worker installed.");
    //install event should wait until whatever inside evt.waitUntil() finishes.
    evt.waitUntil(
        //open static cache
        caches.open(statCache)
    .then((cache)=>{
        console.log("Caching assets...");
        //adding all assets in assets array into cache
        cache.addAll(assets);
    })
    );
    
});

//The activate event
self.addEventListener('activate',(evt)=>{
    //console.log("Service worker is active!");
    evt.waitUntil(
        //accessing all versions of caches available currently
        caches.keys()
        .then((keys)=>{
            //console.log(keys);
            //going through the list pf caches, checking whether the cache name is equal to current cache version/s:static and dynamic and getting rid of any old cache versions
            return Promise.all(
                keys.filter(key=>key!==statCache && key!==dynaCache)
                .map(key=>caches.delete(key))
            );

        })
    );
});

//The fetch event handler
self.addEventListener('fetch',(evt)=>{
    //console.log("Fetch event",evt);
    //interrupt the normal request and respond with a custom response
    evt.respondWith(
        //check if the resource exists in cache
        caches.match(evt.request)
        .then((cacheRes)=>{
            //return from cache if it is there in cache. or else fetch from server
            return cacheRes || fetch(evt.request)
            //when fetching from server, add the request and response to dynamic cache to access the resource/s when offline
            .then(fetchRes=>{
                return caches.open(dynaCache)
                .then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                });
            });
            //returning the fallback page if the resource is not available in any of the caches
        }).catch(()=>{
            //check whether the request url contains .html in it
            if(evt.request.url.indexOf('.html')>-1){
                return caches.match('/fallback.html')
            }
            })
    );
})