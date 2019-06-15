"use strict";var precacheConfig=[["/404.html","6e01ec2a1ef7bd77942ca3260782eaab"],["/about/index.html","18362d946f0f62ae50012da8c66f2f69"],["/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/configuration.html","a8e8d68fff4cb50ef9dd08d791bf3224"],["/creating-themes.html","80961fd95c0cc54c926b99f0deb17d45"],["/custom-color-scheme.html","f7ce8bf0d6149c41d6f6d130b04043b9"],["/custom-css.html","24298001a5bf3622936f61999f098481"],["/custom-heading-background.html","92986b301938b1d501d0543a4aa8de62"],["/custom-heading-image.html","e6f981fcb3f35a85c9f9e4b4756a4917"],["/custom-html-markups.html","698ad598b7b19d6965ecc65f0b7e0331"],["/customizing-styles.html","95cdcf9d797e58996e8d5f669aba8b9e"],["/deployment-methods.html","bae51e3432482fd7eacd0de457bb0f50"],["/external-link-post.html","2cbbde0268fc7a192bbff47d7a48639e"],["/favicon.png","3d05f8132d73390b349cae0ce8c016d2"],["/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/getting-started.html","b9e773c0bf056eb4c3ff6ef4ea09ab4f"],["/github-pages-setup.html","4e9dddae6e72d6e4f0f49374eeb9caa0"],["/index.html","945c8bb0582655af8fc6eab6cea7a7e9"],["/jekyll-theme-compatibility.html","071fd69309162680f8899f01e99c557d"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/markdown-features-test.html","46e729e4eb5f49e8efa4702d0eb99c97"],["/markup-example.html","9060e2f7a9a41ee35ff6240d036a88a6"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/multiple-themes-support.html","d7aaab3a71845e62063052f4b7fe6375"],["/news/index.html","fdeee3bb74d65336504d2c9b0255ae83"],["/open-graph.html","c64f665fa15099587cf89d8dce7e8cc3"],["/svg-post-title.html","551206b3f36bd030102dd809f7d593fc"],["/syntax-highlighting.html","0c61f9ceef6cf36f633bb8fb5a14c1dc"],["/theme-curtana.html","94b0002a6e52308afe015ab2768536e0"],["/themes.html","69ea380e84c8ba16fd728eb5d0df05bd"],["/upgrading-from-v1-to-v2.html","5d85fc46a11b5b29c1b1feda2c7a9f11"],["/upgrading-guide-v1.1.0.html","6723fbf5a17441f330502705a7ffa4d9"],["/welcome.html","9448f170988d4e942b8544fcf2277cca"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,!1);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return fetch(e.request)}))}});