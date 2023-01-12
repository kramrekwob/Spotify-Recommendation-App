
const express = require("express");
var request = require('request'); // "Request" librarynpm
require("dotenv").config({ path: "./config/.env" })
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var client_id = '80af750695d24965b96b84c1b2b0665b'; // Your client id
var client_secret = '6415a1e2f2c946fb85cd6d236d83d059'; // Your secret

//let it use the public folder for scripts
app.use(express.static("public"));

// application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
//receive access token as body.access_token
var tempToken;

request.post(authOptions, function (error, response, body) {
  if (error) console.log('initial authentication error')
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    tempToken = body.access_token;
    console.log(tempToken)
    i = tempToken;
  }
});

app.post('/recommend', (req, res) => {
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
  request.get(recommend, function(error, response, body) {
    if (error) console.log('error retrieving info from spotify');
    for (let i=0; i<body.tracks.length; i++){
      let thisSong = [];
      thisSong.push(body.tracks[i].name);
      thisSong.push(body.tracks[i].album.images);
      thisSong.push(body.tracks[i].artists);
      thisSong.push(body.tracks[i].album.name);
      thisSong.push(body.tracks[i].album.release_date);
      thisSong.push(body.tracks[i].external_urls.spotify);
      thisSong.push(body.tracks[i].preview_url)
      payload[body.tracks[i].name] = thisSong;
    }
    res.send({'payload': payload })
        })
  
});
// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {

//     // use the access token to access the Spotify Web API
//     var token = body.access_token;
//     var options = {
//       url: "https://api.spotify.com/v1/recommendations/available-genre-seeds",
//       headers: {
//         'Authorization': 'Bearer ' + token
//       },
//       json: true
//     };
//     request.get(options, function(error, response, body) {
//         console.log(body)
//     });
//   }
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}, you better go catch it!`);
});

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