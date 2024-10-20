'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2ea7812eeddb0b7b5a1742fa0dfaf0ee",
"assets/AssetManifest.bin.json": "2ae8256ce38ea28c292be3cf51e69ec6",
"assets/AssetManifest.json": "115abaffc00d982909895cbfdcc21612",
"assets/assets/animations/aboutBg.json": "c7ae8489656c7b175a718e039ac7df49",
"assets/assets/animations/aboutMe.json": "61bb65422642916b418d368818083860",
"assets/assets/animations/bookApoinment.json": "ed4aeb1d31b5867ec08ebf5e00ffe3cc",
"assets/assets/animations/developer_portfolio.json": "d35671af8071bd7187e9ec5e83bb5773",
"assets/assets/animations/developer_waiting.json": "1acd01094852f1142a95f0d6091a9a97",
"assets/assets/animations/education.json": "26b95c8a798c6ad55c9ece60dc5fa22d",
"assets/assets/animations/loading.json": "68d2d54705312a860a34bff0a8b9b75b",
"assets/assets/animations/skills_portfolio.json": "36d0806f75d4548f8ff5593998fdc72a",
"assets/assets/gifs/loading.gif": "402630577e3cdceaf86a6f342f67355c",
"assets/assets/images/C.png": "307bf51b42061eb5dc0a79deddc10813",
"assets/assets/images/circle.png": "3dd66cf82c548790915496fda3beb4ca",
"assets/assets/images/circle_chat.jpg": "ca906ce501645688725ce68fd2fb2e6a",
"assets/assets/images/circle_chatList.jpg": "bbbd653b26e294ab08397c948b573300",
"assets/assets/images/circle_chatmenu.jpg": "d958f214d55e836bd36f5cce3b361377",
"assets/assets/images/circle_chatMessage.jpg": "a0dfab67e2d29c7dd177942a79f1292f",
"assets/assets/images/circle_home.jpg": "ddb819874c9c7d93642bf2a0d62eb234",
"assets/assets/images/circle_login.jpg": "d0673317596ba998f4e7557fade11be0",
"assets/assets/images/circle_signup.jpg": "b200c1e2a330b78799604faa92331f81",
"assets/assets/images/circle_splash.jpg": "98036d865c7d1ddee767088fc18f0eb9",
"assets/assets/images/Dart.png": "e8f4ae7a36f98f7648f117ee356f023b",
"assets/assets/images/Figma.png": "2ef3cc295b969860412cd044be6f81c9",
"assets/assets/images/Firebase.png": "bc800ada43bb56100c534de89ba7bdc6",
"assets/assets/images/Flutter.png": "4cb0091a4af5dcf74304f470d3183d37",
"assets/assets/images/gitHubImage.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/Java.png": "05f161af5a5e7c1faf0d4251b564670b",
"assets/assets/images/montra.png": "d8e727d66b39e33e6519388eb5d4cb1e",
"assets/assets/images/MySelfImage.jpg": "26afc0d60bd18d927983115d81739622",
"assets/assets/images/NetflixLogo.jpeg": "b4bd1d92a56a238f6c4b2fe502dfec93",
"assets/assets/images/portfolio.png": "fd20f3ef708bee79ee15d277f270eb76",
"assets/assets/images/Python.png": "66613da9a8fad6a4485207c32aab0242",
"assets/assets/images/sujith.jpg": "58604bfb9e9b4a48d3a5984907e32b57",
"assets/assets/images/Telegram+popupmenu.jpg": "558c8214faebc248a5020b1145514981",
"assets/assets/images/telegramLogo.png": "286e1b82f7937fe6d5ace7f71813d30e",
"assets/assets/images/Telegram_chat.jpg": "fc72bb6b002035460198a1ed76d9aebc",
"assets/assets/images/Telegram_drawer.jpg": "d902985545d6e5b38aaeb6d2cb367691",
"assets/assets/images/Telegram_home.jpg": "bbe9a2e5008bfe71f17ded1c1d5932d2",
"assets/assets/images/Telegram_msg_snt.jpg": "cd783c7861a322ec0db8ab5ef5780c13",
"assets/assets/images/Telegram_settings.jpg": "d4efc527033ae4a690f3ba3870a2eed7",
"assets/assets/images/Telegram_settings_popupmenu.jpg": "299ffee3ace2fb357adee26775d4babe",
"assets/assets/images/Telegram_typing.jpg": "03536700d4ad0a9689122eb89a4197f6",
"assets/assets/images/todoAppLogo.jpg": "af6b921f094aa612f57b0d2e3f3aedf5",
"assets/assets/images/todoProfile.jpg": "cefff9e0268ed32cbbd8ff6dfa1af1f9",
"assets/assets/images/todo_aboutus.jpg": "76e0284ac2dc63b8a5483a2ddff1dd11",
"assets/assets/images/todo_bottomsheet.jpg": "5b47816911f53a273a9e780593801742",
"assets/assets/images/todo_bottomshettdata.jpg": "10e4c43e9d88196a5d59aba5cf8730db",
"assets/assets/images/todo_bottomshett_withoutData.jpg": "c68801ef2611e7edd7b7744d413ade31",
"assets/assets/images/todo_deleteDatas.jpg": "dc0d51e11e456330cd972a8162a4a8cf",
"assets/assets/images/todo_edit_profile.jpg": "b0d2bd7ebb024bcb5bd1ec1893bb5eab",
"assets/assets/images/todo_getstarted.jpg": "3c2e835664b58cbcba95581c6b99b95f",
"assets/assets/images/todo_home.jpg": "51b4d4c1df1ea3a41f795901d1b6042d",
"assets/assets/images/whatsappLogo.png": "6acf414c3e19aa945cf24307cd1715f4",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/fonts/MaterialIcons-Regular.otf": "07867ed55c3ddd5e07018a2e64beb9e0",
"assets/NOTICES": "11fa8cd57b3ff429dd4c08702788d9c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "81d25f47285f0687addd3baea65ea839",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bb129261409fdf99e0631f212ff36d0",
"/": "5bb129261409fdf99e0631f212ff36d0",
"main.dart.js": "68b8c7b3097e42cd7f46a57e8e3df965",
"manifest.json": "bae248d31e4f8733acb2f353550226d3",
"version.json": "696e9d4932b7ca674bd60f27894c8396"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
