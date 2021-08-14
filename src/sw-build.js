import workboxBuild from 'workbox-build';

const buildSW = () => {
	return workboxBuild
		.injectManifest({
			swSrc: 'src/sw-custom.js', // custom sw rule
			swDest: 'build/sw.js', // sw output file (auto-generated)
			globDirectory: 'build',
			globPatterns: ['**/*.{js,css,html,png,svg,ico,mp3}'],
			maximumFileSizeToCacheInBytes: 7 * 10 ** 6,
		})
		.then(({ count, size, warnings }) => {
			warnings.forEach(console.warn);
			console.info(
				`${count} files will be precached,\ntotaling ${(
					size /
					(1024 * 1024)
				).toFixed(2)} MBs.`,
			);
		});
};

buildSW();
