self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
    const title = 'Push web by kodee';
    const options = {
      body: event.data.text(),
      icon: 'images/icon.png',
      badge: 'images/badge.png'
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });

  // Add an event listener to handle notification clicks
self.addEventListener('notificationclick', function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
    const title = 'Push web by kodee';
    const options = {
      body: event.data.text(),
      icon: 'images/icon.png',
      badge: 'images/badge.png'
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
});