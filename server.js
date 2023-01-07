
const express = require("express");
const app = express();
var http = require('http');
var request = require('request'); // "Request" librarynpm
require("dotenv").config({ path: "./config/.env" })
var client_id = '80af750695d24965b96b84c1b2b0665b'; // Your client id
var client_secret = '6415a1e2f2c946fb85cd6d236d83d059'; // Your secret

// your application requests authorization
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

// request.post(authOptions, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var token = body.access_token;
//       tempToken=body.access_token;
//       console.log(tempToken)
//       i = tempToken;
//     }
//   });

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: "https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA",
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
        console.log(body)
    });
  }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}, you better go catch it!`);
  });
