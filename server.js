
const express = require("express");
const app = express();
var request = require('request'); // "Request" librarynpm
require("dotenv").config({ path: "./config/.env" })
var client_id = '80af750695d24965b96b84c1b2b0665b'; // Your client id
var client_secret = '6415a1e2f2c946fb85cd6d236d83d059'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
console.log(authOptions)
let tempToken = ''
//receive access token as body.access_token
request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var token = body.access_token;
      tempToken=body.acces_token;
    }
  });
console.log(tempToken)
// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {

//     // use the access token to access the Spotify Web API
//     var token = body.access_token;
//     var options = {
//       url: 'https://api.spotify.com/v1/users/m.bowker422',
//       headers: {
//         'Authorization': 'Bearer ' + token
//       },
//       json: true
//     };
//     request.get(options, function(error, response, body) {
    
//     });
//   }
// });
//main route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}, you better go catch it!`);
  });
