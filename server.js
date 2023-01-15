
const express = require("express");
var request = require('request'); // "Request" librarynpm
require("dotenv").config({ path: "./config/.env" })
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: false }))

//let it use the public folder
app.use(express.static("public"));

// application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
//receive access token as body.access_token 
var tempToken;
let expiration;
function getAuthToken() {
  request.post(authOptions, function (error, response, body) {
    if (error) console.log('initial authentication error')
    if (!error && response.statusCode === 200) {
      expiration = new Date().getSeconds + 3600
      tempToken = body.access_token;
      console.log(tempToken)
      i = tempToken;
    }
  });
}
getAuthToken();

// app.post('/recommendations', (req, res) => {
//   const {sliders, seeds} = req.body;
//   let query = "https://api.spotify.com/v1/recommendations/?market=ES";
//   let seedChoices = {};
//   let levels = [];

//   for (let i = 0; i < sliders.length; i++) {
// //     if (sliders[i].name === "danceability") {
// //         query += `&${sliders[i].name}=${sliders[i].value}`;
//     }
//     if (sliders[i].name === "energy") {
//         query += `&${sliders[i].name}=${sliders[i].value}`;
//     }
//     // add other sliders here
//   }
//   for (let i = 0; i < seeds.length; i++) {
//     if (seeds[i].type === "artist") {
//         seedChoices.artist = seeds[i].id;
//     }
//     if (seeds[i].type === "track") {
//         seedChoices.track = seeds[i].id;
//     }
//     if (seeds[i].type === "genre") {
//         seedChoices.genre = seeds[i].name;
//     }
//   }
//   query += `&seed_artists=${seedChoices.artist}&seed_tracks=${seedChoices.track}&seed_genres=${seedChoices.genre}`;
//   fetch(query)
//     .then(response => response.json())
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       console.log(err);
//       res.send(err);
//     });
// });


app.post('/recommend', (req, res) => {
  if (new Date() > expiration) {
    getAuthToken();
  }
  console.log(tempToken)
  console.log(req.body)
  let recommend = {
    url: req.body.query,
    headers: {
      'Authorization': 'Bearer ' + tempToken
    },
    json: true
  }
  let payload = {};
  console.log(req.body)
  request.get(recommend, function (error, response, body) {
    if (error) console.log('error retrieving info from spotify');
    for (let i = 0; i < body.tracks.length; i++) {
      let thisSong = [];
      thisSong.push(body.tracks[i].name);
      thisSong.push(body.tracks[i].album.images);
      thisSong.push(body.tracks[i].artists);
      thisSong.push(body.tracks[i].album.name);
      thisSong.push(body.tracks[i].album.release_date);
      thisSong.push(body.tracks[i].external_urls.spotify)
      thisSong.push(body.tracks[i].preview_url)
      payload[body.tracks[i].name] = thisSong;
    }
    res.send({ 'payload': payload })
  })

});
app.post('/search', async (req, res) => {
  if (new Date() > expiration) {
    getAuthToken();
  }

  console.log(req.body)
  const { searchTerm, searchType } = req.body;
  if (searchTerm == '') { console.log('empty query') }
  let endpoint = '';
  if (searchType === 'artist') {
    endpoint = 'https://api.spotify.com/v1/search?q=' + searchTerm + '&type=artist&limit=5';
  } else if (searchType === 'track') {
    endpoint = 'https://api.spotify.com/v1/search?q=' + searchTerm + '&type=track&limit=5';
  }
  let search = {
    url: endpoint,
    headers: { 'Authorization': 'Bearer ' + tempToken },
    json: true
  }
  try {
    // use your access_token and send it with the request
    const response = request.get(search, function (error, response, body) {
      if (error) {
        console.log('error retrieving search info from spotify');
      } else {
        let searchItems;
        if (searchType === 'artist') {
          searchItems = body.artists.items;
          console.log(searchItems)
        } else if (searchType === 'track') {
          searchItems = body.tracks.items.map(item => {
            return {
              id: item.id,
              type: 'track',
              name: item.name,
              images: item.album.images,
              artist: item.artists
            }
          });
          console.log(searchItems)
        }
        res.json(searchItems);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting data from Spotify API" });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}, you better go catch it!`);
});



// 
// {
//   album: {
//     album_type: 'COMPILATION',
//     artists: [Array],
//     external_urls: [Object],
//     href: 'https://api.spotify.com/v1/albums/77TvtJAiUlwM8q4r7VneKL',
//     id: '77TvtJAiUlwM8q4r7VneKL',
//     images: [Array],
//     name: 'Pure... Chillout',
//     release_date: '2011-06-03',
//     release_date_precision: 'day',
//     total_tracks: 68,
//     type: 'album',
//     uri: 'spotify:album:77TvtJAiUlwM8q4r7VneKL'
//   },
//   artists: [ [Object] ],
//   disc_number: 1,
//   duration_ms: 274346,
//   explicit: false,
//   external_ids: { isrc: 'GBBBM9002093' },
//   external_urls: {
//     spotify: 'https://open.spotify.com/track/6vFUFJzXkbbW2YHWt3tIom'
//   },
//   href: 'https://api.spotify.com/v1/tracks/6vFUFJzXkbbW2YHWt3tIom',
//   id: '6vFUFJzXkbbW2YHWt3tIom',
//   is_local: false,
//   is_playable: true,
//   name: 'Cowboys and Angels - Edit',
//   popularity: 16,
//   preview_url: 'https://p.scdn.co/mp3-preview/49067fe12b54a49dbe0e1d5577c46a6cd19afcd7?cid=80af750695d24965b96b84c1b2b0665b',
//   track_number: 15,
//   type: 'track',
//   uri: 'spotify:track:6vFUFJzXkbbW2YHWt3tIom'
// },