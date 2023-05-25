'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "709c1b609fe99bea335875ac4071f89c",
"assets/AssetManifest.smcbin": "3d9dace7ced0eb7ef205c0ca8fcc8f57",
"assets/assets/fonts/Asap-Black.ttf": "54396cac6178cccfdac6e73d3286c5f6",
"assets/assets/fonts/Asap-Bold.ttf": "378d3b281b7ac93c44f65434f30afc35",
"assets/assets/fonts/Asap-ExtraBold.ttf": "a339944ecd22cff7026e7e06e478b3eb",
"assets/assets/fonts/Asap-ExtraLight.ttf": "64c4fb1d82b3952a0ead29319a1eec5a",
"assets/assets/fonts/Asap-Light.ttf": "e6f56f7ad34b81e7edf076c7874ee9b3",
"assets/assets/fonts/Asap-Medium.ttf": "dd632bf0da27c8ee47fbcb070a44895a",
"assets/assets/fonts/Asap-Regular.ttf": "c3baa296b36a4b2d634bc5cabe020875",
"assets/assets/fonts/Asap-SemiBold.ttf": "cb376a6250865e3c27bd362f8c9da887",
"assets/assets/fonts/Asap-Thin.ttf": "de1d6c901eb1a96b1dd2e9923551a3c4",
"assets/assets/images/add_post.svg": "60536ba14709339db50c46558ebf39a4",
"assets/assets/images/add_user.svg": "16d81ff3e57bc8eaee9bf8e8d5d58f24",
"assets/assets/images/affiliate_marketing.svg": "b7e9c9a93ea0652f17f9c125ab0a2483",
"assets/assets/images/arrow_down.svg": "d4d91610c48772a04809edf771104ed5",
"assets/assets/images/arrow_left.svg": "b8b0bc1699f8c25901ee38c393b75761",
"assets/assets/images/arrow_right.svg": "bdc747b71c609229cf3ca654a5c8ef0e",
"assets/assets/images/dashboard.svg": "e56c3687e7c15a4c9e2b9d5efc2f240b",
"assets/assets/images/default_image.png": "28a81226adbe1e8f55b0a1fb050718af",
"assets/assets/images/exchange.svg": "41f3406f49908fa1c6bdef887f69654d",
"assets/assets/images/financial_gain.png": "744937ad9f9868494f197203b1649e3e",
"assets/assets/images/globe.png": "9cdef4c569f6ba342775c249c19ce434",
"assets/assets/images/grey_wallet.svg": "29683dc65ea329ac8c7de81e672fd375",
"assets/assets/images/group_users.svg": "cb26237edb48683d9e7f495cd94ac6b6",
"assets/assets/images/growth.png": "90c253fb2a9ee782bb7f093c6568d709",
"assets/assets/images/help.svg": "da2c6b8ddd3d5dc70d16e02de7cc10f4",
"assets/assets/images/info.svg": "804ba7f005d81c439ea8f31f47685a3c",
"assets/assets/images/information.svg": "1bf2d7f6eeaf6c09f8d90aa68dfb03d1",
"assets/assets/images/internet.svg": "1e2fbf3890e19237694fb5b1dd3b7cc8",
"assets/assets/images/launcher_icon.png": "fb35b6b345809699bb021b1f7473b1ec",
"assets/assets/images/lock.svg": "3466776be5f3e6ddf2c14d567aeaf575",
"assets/assets/images/logo.png": "68fdc05f0067f78c60c247bfc0d28095",
"assets/assets/images/logo2.png": "59927d0e67dda172ab1309ea5c70ef8d",
"assets/assets/images/logo3.png": "4e43c1791008bb85be37a5019ffed911",
"assets/assets/images/logo4.png": "df7c497b31207ae294d5e653462040ff",
"assets/assets/images/membership.png": "20742b4a994a7c28505516d43d91e5ba",
"assets/assets/images/menu.svg": "a21758dc00204b29d84a4c7c1f8796b1",
"assets/assets/images/native_splash.png": "c5f4a6caddd0ed0b716106e4e25c878e",
"assets/assets/images/news.svg": "52400c34a04929240f3d0fddc82e5da9",
"assets/assets/images/news2.svg": "6541b058ef3eeb5544197b2227088292",
"assets/assets/images/paste.svg": "d3426ff24aa6f8d1c2eafd889177a19e",
"assets/assets/images/player.svg": "e371c9743ecf0bd20d39ee05205eb5b1",
"assets/assets/images/profile.png": "b2dd1b09edee72c9a508ccce5054ff2d",
"assets/assets/images/puzzle.svg": "64e0769c5c8cfee5f97a146eef291762",
"assets/assets/images/qr_code.svg": "a77ecb120ee7c88c0ec7377810f6cb45",
"assets/assets/images/resume.svg": "51b073e52637090fdde964e1655ca4d2",
"assets/assets/images/send.svg": "de03f1e5240924e11779982f3307fee7",
"assets/assets/images/settings.svg": "bdbb608002b398b0234634ffda14e161",
"assets/assets/images/speedometer.png": "56f3ca7ca66183dbb904aa692cb4ed7c",
"assets/assets/images/upload_image.svg": "a5f9bdbda6159d8d42b972281cc2f099",
"assets/assets/images/wallet.png": "e7b521e474d39b6816072d1d0ba084b5",
"assets/assets/images/wallet_grey.png": "40867503605fa764c5c55cb300c3fa41",
"assets/FontManifest.json": "10233b65a195edbfd39f2651963a59f2",
"assets/fonts/MaterialIcons-Regular.otf": "04b2c1e60c6642f64ef081f6ee091b5e",
"assets/NOTICES": "80a9f38f451f65829d2190e87da4d181",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b8c22757a2a95b5ce22d6bf63cd4d862",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "df930d5a43fc565ae3e52d65d04b54d4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "47253ebb3ad74f340858a54e5f080e02",
"icons/Icon-512.png": "7084a6b13e161ab7bea21a89c7310ed5",
"icons/Icon-maskable-192.png": "47253ebb3ad74f340858a54e5f080e02",
"icons/Icon-maskable-512.png": "7084a6b13e161ab7bea21a89c7310ed5",
"index.html": "245ef4af6b47639ef725fa0e3cc28d52",
"/": "245ef4af6b47639ef725fa0e3cc28d52",
"main.dart.js": "33d849c961a806daf37d9e6eddd375b3",
"manifest.json": "8ca405f7b2d355d1003f8a1d2b6e258a",
"splash/img/light-background.png": "c5f4a6caddd0ed0b716106e4e25c878e",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "c9212ca373399b78bbb21570949964c0",
"version.json": "504d5fefc31a3ee3ca208e869586128f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
