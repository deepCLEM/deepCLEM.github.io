"use strict";var precacheConfig=[["/2018/index.html","b06cc222cf6a6d90c2b3d453a017febc"],["/2018/static/css/main.013597b2.css","9bca96c6e36a403b48fc38e1e5d08dbe"],["/2018/static/js/main.1c38a9aa.js","6f9a4bced416aae278e6153b4a7e3a5e"],["/2018/static/media/10636419_10203880244832112_3086301521967770082_o.e4456ed7.jpg","e4456ed7d4569bd205516ff49e2ad65d"],["/2018/static/media/14362711_1443783055638586_3924866533217962148_o.e5215d5b.jpg","e5215d5b55593d2ae7476ef391add8cb"],["/2018/static/media/Hanpo_Avatar.d3631d5e.jpg","d3631d5e76408a94d45367a0ebb0f5b5"],["/2018/static/media/allen.cb8cdf36.jpg","cb8cdf36b7bba93a4ba191ef30006c97"],["/2018/static/media/chang.55c1d403.jpg","55c1d403a430dc190967f0ab1ada58aa"],["/2018/static/media/elvis.5cc94a28.jpg","5cc94a289bdb985d2aff9b1a2821839b"],["/2018/static/media/enid.710cf2c1.jpg","710cf2c1880583f5e757cf4c9654259b"],["/2018/static/media/fan.cd5b2acf.png","cd5b2acfb3190dbd2d2b53d1ac1920b9"],["/2018/static/media/gary.7343be92.jpeg","7343be92e2708113f2b13549d6acff6f"],["/2018/static/media/jason.49df0395.jpeg","49df0395d763fa3a5525678cd58b1f08"],["/2018/static/media/logo_5xruby.tw.d31ab51a.png","d31ab51ae93801c15b2b569ef1e11cb6"],["/2018/static/media/logo_catchplay.53864291.png","5386429112444c5ab108c85316db5c95"],["/2018/static/media/logo_cocoaheads_taipei.04bde3ff.png","04bde3ff74c544e0a126cfa3a94307a5"],["/2018/static/media/logo_dcard.dd5423a9.png","dd5423a94b0b99c472b985a2c14c18c8"],["/2018/static/media/logo_esun.412fc611.png","412fc611329bdfbd60da1f6938b64a59"],["/2018/static/media/logo_iplayground.85a323f9.png","85a323f93bedf48581c6f6844819cc71"],["/2018/static/media/logo_keyxentic.185b57fe.png","185b57fe147194909ef03782e8d8c302"],["/2018/static/media/logo_pic-collage.060d67d7.png","060d67d71ebcbdbf25fb588f5a748ec7"],["/2018/static/media/logo_swift_girls.e221c42c.png","e221c42c05790a392b97ad4ee8fd66aa"],["/2018/static/media/luke.8bf85192.jpg","8bf85192a53cd4c5b40e25914717c01d"],["/2018/static/media/marcus.8eb397ea.jpg","8eb397ead68457555069c98cd6fc6f9a"],["/2018/static/media/mars.44889cf9.jpg","44889cf98b47d85b6ff7a9d6960ff4e2"],["/2018/static/media/marvin.706e5b4b.jpg","706e5b4be869b483943c0d9c875d67de"],["/2018/static/media/meme.705091af.png","705091af9edca50f6a3cfb145762a758"],["/2018/static/media/pingchen.9402e43e.jpg","9402e43edc97bef729c9d4ed68ec6839"],["/2018/static/media/pofat.93ced0c2.jpg","93ced0c2d2b6d9da20af5c0fc572b9d5"],["/2018/static/media/tina.4436db82.jpg","4436db822e53b2506888c72e1e5aa74a"],["/2018/static/media/ting.dfe67678.jpg","dfe676789a9eb545815efa92df95b02b"],["/2018/static/media/toby.a0db8220.jpg","a0db82203de696ae7d98dd754dc54216"],["/2018/static/media/vivian.eeacc827.jpg","eeacc827d83921fad47b11d0861afcf1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/2018/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});