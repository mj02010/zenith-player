try {
	if (typeof importScripts === 'function') {
		importScripts(
			'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js',
		);

		if (workbox) {
			workbox.setConfig({ debug: false });

			self.addEventListener('install', (event) => {
				self.skipWaiting();
			});

			try {
				workbox.precaching.precacheAndRoute([]);
			} catch (error) {
				console.error(error);
			}

			workbox.routing.registerRoute(
				/\.(?:js|css|html|png|svg|ico|mp3)$/,
				workbox.strategies.networkFirst(),
			);

			workbox.routing.registerRoute(
				new RegExp('https://fonts.(?:.googleapis|gstatic).com/(.*)'),
				workbox.strategies.cacheFirst({
					cacheName: 'googleapis',
					plugins: [
						new workbox.expiration.Plugin({
							maxEntries: 30,
						}),
					],
				}),
			);
		} else {
			console.error('Workbox could not be loaded. No offline support');
		}
	}
} catch (error) {
	console.error(
		'Unable to install service worker. Possible network error.',
		error,
	);
}
