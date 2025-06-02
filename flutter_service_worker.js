'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6e7b4c667505c071d4b036c4c8f75c2c",
"assets/AssetManifest.bin.json": "267c55e8b9829dfe69a348d25911a57a",
"assets/AssetManifest.json": "a8fe2b75fca24d5cd3d059375159c003",
"assets/assets/image/icon/android.png": "923ec17494026baf7caca21dad333a13",
"assets/assets/image/icon/app-store.png": "dddbb6114be849589af4da331074dd32",
"assets/assets/image/icon/clickup.png": "ce5215143685b26a45e0360cba49ec8e",
"assets/assets/image/icon/code.png": "99a81d9e28f7128cb6c4116c649e3c60",
"assets/assets/image/icon/dart.png": "cdc189d734b00c7dc950bda7bf0d0b63",
"assets/assets/image/icon/figma.png": "fa463b4bbb117932d3f1ba1ac5f0874e",
"assets/assets/image/icon/firebase.png": "c911d672405a3c9144eed22c86251dae",
"assets/assets/image/icon/flutter.png": "11730d08fa60e5d497c6827f65288e85",
"assets/assets/image/icon/git.png": "4422aed02f4f804033a6a921dc18b10d",
"assets/assets/image/icon/github.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/image/icon/go.png": "be58bda8dfeee8a622ba49e4b3e64ad7",
"assets/assets/image/icon/kotlin.png": "27fd5488a753becde31196c6d19a9f7a",
"assets/assets/image/icon/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/image/icon/node-js.png": "c8ab051c76c4b3fb80d9dbd3f62781be",
"assets/assets/image/icon/playstore.png": "65a4a8e516390c6a9a3d2825bc4fd284",
"assets/assets/image/icon/postman.png": "3e657c77e923c2cae914bb43e8c17475",
"assets/assets/image/other/contact.png": "c9c7ff7dd3d9949c31932e5a3648646e",
"assets/assets/image/other/dash.png": "304ebc61c6b20777e559af08bda03df2",
"assets/assets/image/other/dash2022_4k.png": "304ebc61c6b20777e559af08bda03df2",
"assets/assets/image/other/Modern-Digital-Communication.jpeg": "5affc3cdd948a72168cae07077d9a38c",
"assets/assets/image/other/nitin.jpg": "a7ce401100dba518c2f838390355ddc1",
"assets/assets/image/other/Tech-Savvy-Duo.jpeg": "7d9196489f3daccb4b30b3670185675d",
"assets/assets/image/project/biebol/1.png": "9b56eb4ca06aba8f0018df7c0288b31d",
"assets/assets/image/project/biebol/2.png": "016ed0d4a2a299d1809cf5b13e1f5c43",
"assets/assets/image/project/biebol/3.png": "65faea8e701ba785edec1a7023190929",
"assets/assets/image/project/biebol/4.png": "cd40848197a93b01ff864cfef24d79a2",
"assets/assets/image/project/biebol/5.png": "69bf2660aaaa79c0c24404ea24546f41",
"assets/assets/image/project/biebol/6.png": "e3535cb418e3c7d89218426a6fbf1278",
"assets/assets/image/project/dash/1.png": "005ddb81d976dd009672ac433ef3093b",
"assets/assets/image/project/dash/2.png": "e543274ec29228410396fab5d7923b35",
"assets/assets/image/project/dash/3.png": "b82b30223a4a1b7cf6856d4421a6b7a0",
"assets/assets/image/project/dash/4.png": "fc4a1dcb515fbea0de47f093b8e6d7d3",
"assets/assets/image/project/dm/1.png": "70739d86b2976182aad9a0a6436f92d2",
"assets/assets/image/project/dm/10.png": "a3371df9c62d14d5db4cfcaf96b4e91e",
"assets/assets/image/project/dm/11.png": "3cd9cb0a5ac54b6a18749b58a055e757",
"assets/assets/image/project/dm/12.png": "778e2415dc1246b26433b4a74af5cf90",
"assets/assets/image/project/dm/13.png": "7d9346ddac1ef879a02460275c7261c6",
"assets/assets/image/project/dm/14.png": "87850af3998aa0b98e1c758e093f1a7a",
"assets/assets/image/project/dm/15.png": "545d69142c561b7c696a72c8d2154e4b",
"assets/assets/image/project/dm/2.png": "0385d35ab950b79d7645c270ff7a4df0",
"assets/assets/image/project/dm/3.png": "530ba0687d43e1332b563faab283a689",
"assets/assets/image/project/dm/4.png": "6156d3f0f5e1e51a997633a143587cd8",
"assets/assets/image/project/dm/5.png": "91caa90a4095a856d3480f66c2743118",
"assets/assets/image/project/dm/6.png": "5e218cf1d0ded6e09061ffde82d5deb7",
"assets/assets/image/project/dm/7.png": "f4407afe152447937a3ce6e81ae79cc0",
"assets/assets/image/project/dm/8.png": "b0a66def51ecca9f117e86af1e7bd1f5",
"assets/assets/image/project/dm/9.png": "1368c28b5d1370ed39cba8609b1542c6",
"assets/assets/image/project/eBuySugar/0.jpg": "943d921e637001facfdf270f4bb4897a",
"assets/assets/image/project/eBuySugar/01.jpg": "f0976839a7eac7f1725eee5f119299ca",
"assets/assets/image/project/eBuySugar/1.png": "f5c335e8ea87b6f1519026dac61d31f9",
"assets/assets/image/project/eBuySugar/2.png": "bbb931902a50ff920a675cf399e19f41",
"assets/assets/image/project/eBuySugar/3.png": "2dc1d08851da06331a8ed73add906e41",
"assets/assets/image/project/eBuySugar/4.png": "5330c1b0cca48775f8edeebaea390951",
"assets/assets/image/project/eBuySugar/5.png": "05657b264ff3c0424c01e481d447bc57",
"assets/assets/image/project/eBuySugar/6.png": "7dd5b1e057f9766ca65734bf38157119",
"assets/assets/image/project/eBuySugar/7.png": "8815f187d524d758da1e0bb90dcf2e8f",
"assets/assets/image/project/eBuySugar/8.png": "9aa87046b9625b86a0a978161f4346ea",
"assets/assets/image/project/hw/1.png": "5b690d1373ec742f16cc8ffa2126c27c",
"assets/assets/image/project/hw/2.png": "5721fafe887c8c8fefaba8c518b6d3e9",
"assets/assets/image/project/hw/3.png": "1f683af1fbe9575de6fb1c45ce476bf6",
"assets/assets/image/project/hw/4.png": "53d8fedc0e99178c94aac8426d3c7a0e",
"assets/assets/image/project/hw/5.png": "18c00a7bb2d4682c4f8e7f136b2638d2",
"assets/assets/image/project/hw/6.png": "41e8faf31f32b59354ce757101a34700",
"assets/assets/image/project/infinity/1.png": "951516ebc1ab356d3de196e56abae75b",
"assets/assets/image/project/infinity/2.png": "dbb345daf36f183296458889b5bf49a4",
"assets/assets/image/project/infinity/3.png": "afdb89e757f58c75eaf0d8332cae1c64",
"assets/assets/image/project/infinity/4.png": "0ccb2974105db36c1862431ac8f51ee7",
"assets/assets/image/project/seamens/0.png": "cb36b73513d2f0cda0e31af7b5facfc4",
"assets/assets/image/project/seamens/1.png": "62d301aa3fe6470f4a0eeac8d8e077b3",
"assets/assets/image/project/seamens/2.png": "003cf2715e6e916bd0957b40b2ef2fbc",
"assets/assets/image/project/seamens/3.png": "3fe34a894c211a1501dde6f00e3b41f1",
"assets/assets/image/project/seamens/4.png": "78cdbc860301a1e6f6fe9c2191b6dbc5",
"assets/assets/image/project/seamens/5.png": "62f8603e27440f152dabff1df4625d60",
"assets/assets/image/project/talk/1.png": "e3743619cf55a0792f8d50c6586f453e",
"assets/assets/image/project/talk/2.png": "195149a80eb3c44dd6d2b904c1c1581b",
"assets/assets/image/project/talk/3.png": "8e57f223b8337a57cb754afa1e62f9d3",
"assets/assets/image/project/talk/4.png": "2f01c6cda8c46814db2cbc8be27458ba",
"assets/assets/image/project/talk/5.png": "f0f1f56b05093493dd84b083574f582b",
"assets/assets/image/project/talk/6.png": "cd71698a46c9057e922b3c46556f121d",
"assets/assets/image/project/talk/7.png": "b34c9e87d9c1208211b68b86b4e913eb",
"assets/assets/image/project/tercardia/1.png": "9362c6bfeddff714485b259f068ce783",
"assets/assets/image/project/tercardia/10.png": "6e2b2820be446d44158dc737db48d160",
"assets/assets/image/project/tercardia/2.png": "e2f3d64490a973e4626093a433b4dab0",
"assets/assets/image/project/tercardia/3.png": "58d21a0a9825b5f00d335f3f98a511d9",
"assets/assets/image/project/tercardia/4.png": "83d04d2d87851c41394e1841d02f7a7d",
"assets/assets/image/project/tercardia/5.png": "d4cb5286d8b23f92293e9c006c234bc2",
"assets/assets/image/project/tercardia/6.png": "27a83f25bf83f64d2003d27fa5e1c3c9",
"assets/assets/image/project/tercardia/7.png": "4bbec7665b95faa5f1b4da8fdd02a7e1",
"assets/assets/image/project/tercardia/8.png": "4b45823b16c45c8504fd693d0739a731",
"assets/assets/image/project/tercardia/9.png": "f9e298ff39d8993b7054ec6a036bcb79",
"assets/assets/image/project/tmdb/1.png": "f1f4d2a3bcc7b72c8ddaadb1b9cf6758",
"assets/assets/image/project/tmdb/2.png": "bad14d7843321f3e383b6a40f7ea26bf",
"assets/assets/image/project/tmdb/3.png": "a034694dbe3c987e11a45eff24220985",
"assets/assets/image/project/tmdb/4.png": "83886ebb105e620b5771fa8a59c30f97",
"assets/assets/image/project/tmdb/5.png": "1c3f9a04a1ef534ef784a7a72b161ba6",
"assets/assets/image/project/toys/1.png": "b3bc611eb9860ab488ad251fa3ecc1be",
"assets/assets/image/project/toys/10.png": "06cefd5e8596351eb37edf949724df04",
"assets/assets/image/project/toys/2.png": "abd4e5130bfa363ada5de0f41f6709d2",
"assets/assets/image/project/toys/3.jpg": "d8ded52220cb46abbf453487893f27ef",
"assets/assets/image/project/toys/4.jpg": "2a7761fdca114c49d327f107f3244358",
"assets/assets/image/project/toys/5.png": "46f045ed99ab57499d54abc485c470ff",
"assets/assets/image/project/toys/6.png": "fd294a736398f080ff044d40b57cf913",
"assets/assets/image/project/toys/7.png": "fba8974bd50ccc405cbe8ec76c3b8a67",
"assets/assets/image/project/toys/8.png": "f168af567d8aacc94b42bde6b12f611b",
"assets/assets/image/project/toys/9.png": "8203674f11d4ac053d65e6e718d72f2c",
"assets/assets/image/project/wallet/1.png": "2b459f5c9497b3d205429692e4bc209d",
"assets/assets/image/project/wallet/2.png": "8cb4855ddc0a19bf2d68ca2bf4737a6b",
"assets/assets/image/project/wallet/3.png": "b1088dc815d997e35aa812f168045467",
"assets/assets/image/project/wallet/4.png": "92cb4c5e993041c7bcc4a7ee66fb92ea",
"assets/assets/image/project/wallet/5.png": "f85610bae13b40d930d41bcd7669cbdf",
"assets/assets/image/project/wallet/6.png": "3d73b47524e759ff2e7eab9398e46b54",
"assets/assets/image/project/wallet/7.png": "5ea06272318cd021a83028ee82796cf8",
"assets/assets/json/data.json": "f97ecf61d838c59a54c5d3005174858b",
"assets/assets/json/project.json": "74738b972a05372199498c28b42c557d",
"assets/assets/json/resume.json": "6b1c441f562cd384c87210ae9c17e6ab",
"assets/assets/rive/dash.riv": "d0802f9a79fb2e387c86d44ce2bc2110",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "056a2ac40cc745f6e9375576ef708979",
"assets/NOTICES": "43d6cb67c6173c013387d03e62e85ae3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "8aaedb8cebef61ac89ca5f2d59dfd0d8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35fa96a4c4f7369fe3ebe5b2cba96f10",
"/": "35fa96a4c4f7369fe3ebe5b2cba96f10",
"main.dart.js": "9deca31ac4f3c8db5fa9881cb5942505",
"manifest.json": "b610755a7cd86c90590a40d2f36e4d2e",
"version.json": "dc42554d9f067654650d36c4f5168f8c"};
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
