"use strict";var precacheConfig=[["/404.html","e56f833f283a28114cc3add7c9b85f86"],["/about/index.html","2725a63e517735e9ae9a3da4c8bcb055"],["/apple-touch-icon.png","08046f7b9c38b6525bab497f9d6ed1db"],["/art/index.html","98ea0b70cd739f40fcba662f4fc37721"],["/assets/img/about_header.jpg","30d27b8a38f396a4358969f96e81eaca"],["/assets/svg/amsf2.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/bio_synapse.html","7b7e444870c9f3a6e03d24ed04b1da18"],["/configuration.html","4d653c73a4e800cb80392d4cc2b1fc2d"],["/creating-themes.html","76076187795f68e876740bced2efc850"],["/custom-color-scheme.html","6309690a30237874ddd524f89d0003b6"],["/custom-css.html","1658e459b1e2d424581804b636b45404"],["/custom-heading-background.html","5d3f13419045ca6dd1b220853e9dfc7d"],["/custom-heading-image.html","9e51b2b02cd911b87fa40ce021224f7e"],["/custom-html-markups.html","cb81449cde4f8be7cb32972ebf81709f"],["/customizing-styles.html","b900c410c41ddd80947c545c75e3f3a9"],["/deployment-methods.html","4d4d5b8394a08b8070e86a11c3b32567"],["/external-link-post.html","d34719518f5c0d713e98a6e33bdd5829"],["/favicon.png","08046f7b9c38b6525bab497f9d6ed1db"],["/favicon.svg","ab0bb4a7e846376e36e198d1d99a4e51"],["/getting-started.html","d77594e23ffd7569a84740c6f8af2b7d"],["/github-pages-setup.html","9b56351586cec248d79cd24ce167a019"],["/jekyll-theme-compatibility.html","a89679b613b3554b210222686eef3135"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/markdown-features-test.html","eacee55530733a7261c6f6025086626e"],["/markup-example.html","ace8468496687b8cda2fdf88b381a142"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/multiple-themes-support.html","41b46c7028fce6c5c867116469ee789d"],["/open-graph.html","a2f1159f0b0b7c110e6a5b131933cab5"],["/svg-post-title.html","a5d13b3ac2a8e4d2aa52de4858169e91"],["/syntax-highlighting.html","bc7ea5545290461973c93ba467f90be1"],["/theme-curtana.html","8d31bd8e9bc03b006b2356f1acf7bce6"],["/themes.html","7446397c356507c74290a3bc20302864"],["/upgrading-from-v1-to-v2.html","64a6e97f336886202380ff1e5d707196"],["/upgrading-guide-v1.1.0.html","8f36e32de6b2eba6867b89daf404bb42"],["/welcome.html","9ab8e40f0b6e88043383a8320bfe1179"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return fetch(e.request)}))}});