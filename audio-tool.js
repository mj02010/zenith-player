import fs from 'fs';
import path from 'path';
import ytdl from 'ytdl-core';
import { GetListByKeyword } from 'youtube-search-api';

const { tracks } = JSON.parse(fs.readFileSync('./src/libs/tracks.json'));

async function getYoutubeSearchResults(query) {
	const { items } = await GetListByKeyword(`${query} - audio`);
	return items;
}

async function downloadAudioWithId(name, videoID) {
	const outputName = `${name}.mp3`;
	const outputPath = path.resolve(process.cwd(), 'public', 'audio', outputName);
	const video = ytdl(videoID, {
		filter: 'audioonly',
		quality: 'highestaudio',
		requestOptions: {
			headers: {
				cookie: process.env['YT_COOKIE'] || '',
			},
		},
	});

	video.on('info', (info) => {
		console.log('Downloading:', info.videoDetails.title);
	});

	video.on('end', () => {
		console.log('Downloaded as:', outputName);
	});

	video.pipe(fs.createWriteStream(outputPath));
}

for await (const [index, track] of tracks.entries()) {
	if (track.autoInstall !== false) {
		const items = await getYoutubeSearchResults(track.title);
		downloadAudioWithId(index, items[0].id);
	}
}
