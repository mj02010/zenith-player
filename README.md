![Zenith Player Banner](https://zenith-player.vercel.app/zenith-player-ogimage.png)

# The Zenith Player

_Completely your own, completely free, forever!_

## About

**Ever wanted a simple music solution that doesn't break the bank like popular services**
(~~_cough Spotify cough_~~). Look no further! **Zenith is a music player built using React
and SCSS**! It also utilizes service workers to pre-cache and **provide offline capabilities**,
so you can **take your music on the road**!

## Getting Started

You can create your own deployable instance in a few steps:

1. Clone this repo

   ```
   $ git clone https://github.com/rayhanadev/zenith-player zenith-player
   ```

2. Edit the tracks. Create a file in `/src/libs/` called `tracks.json`. It should have a single
   key the name "tracks" and the value should be an array: It should look something like:

   ```json
   {
     "tracks": [
       {
         "title": "Song - Author",
         "isFavorite": true,
         "isNotAutoInstalled": false
       },
       ...
     ]
   }
   ```

   for each song in your playlist.

3. (Optional) if you're using the audio build tool, you might need a Youtube Cookie
   to actually get the song ([ytdl-core#980](https://github.com/fent/node-ytdl-core/issues/980#issuecomment-886211227)).
   You can get it by going to the Network tab in DevTools and copy-pasting the Cookie
   field into a `YT_COOKIE` environmental variable.

4. Add any local songs to the `/public/audio/` folder with the name as the index of the song
   in the tracks.json file. For example the third song would be "3.mp3".

5. Run the build script

   ```
   $ yarn build
   ```

6. Take the build output and upload it to your favorite hosting solution.

7. Celebrate with some awesome vibes! You just setup an instance of Zenith!
