self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        './',
        './index.html',
        './style.css',
           './codeitemp.svg',
           './represent.jpg',
          './manifest.json',
          './script.js',
          './codeitemp2.png',
          './codeitemp.png',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
