
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
  let payload = ''
  request.get(recommend, function(error, response, body) {
    console.log(body)
    if (error) console.log('error retrieving info from spotify')
    for (let tracks in body.tracks){
      payload+=tracks.name;
    }
    console.log(payload)
        });
  res.send(payload)
});
https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDxnZWxR0hIvWLafT4REzWXBTi4Ciy9l7fvmr62jENG3K24Nl7FlKF3Nz5ubBKJQreF0sJ-5naaRUyXbU33b6EvhjjTbYoDE_ehjdVKNOfkIO_f8O1mBH2U0zw6tG45H1BNsaNWqLj19MIf7e1gYq3FkcuT1LKzDAZN0Zd2EOktxBU9

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

