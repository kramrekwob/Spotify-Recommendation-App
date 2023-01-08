
const express = require("express");
const app = express();
var http = require('http');
var request = require('request'); // "Request" librarynpm
require("dotenv").config({ path: "./config/.env" })

// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }))

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

request.post(authOptions, function(error, response, body) {
  if (error) console.log('initial authentication error')
    if (!error && response.statusCode === 200) {
      var token = body.access_token;
      tempToken=body.access_token;
      console.log(tempToken)
      i = tempToken;
    }
  });

app.post('/recommend', (req,res) => {
  console.log(tempToken)
  console.log(req)
  // let recommend = {
  //   url: req.body,
  //   headers: {
  //     'Authorization': 'Bearer ' + tempToken
  //   },
  //   json: true
  // }
  // request.get(recommend, function(error, response, body) {
  //           console.log(body)
  //       });
})


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

  