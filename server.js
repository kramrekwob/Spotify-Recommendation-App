
const express = require("express");
var request = require('request'); // "Request" librarynpm
require("dotenv").config({ path: "./config/.env" })
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("build"));


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
async function getAuthToken() {
  await request.post(authOptions, function (error, response, body) {
    if (error) console.log('initial authentication error')
    if (!error && response.statusCode === 200) {
      expiration = new Date().getTime() + 3600 * 1000;
      tempToken = body.access_token;
      console.log(tempToken)
      i = tempToken;
    }
  });
}
getAuthToken();


app.post("/recommend", async (req, res) => {
    console.log(req.body)
    if (new Date() > expiration) {
      await getAuthToken();
    }
    const { seed , sliders } = req.body;
    if (!seed) {
      res.status(400).send("Please select at least one seed before sending a request");
      return;
  }
    let seedQuery = "";
    if (seed.length > 0) {
      seedQuery = "seed_tracks=" + seed
        .filter(s => s.type === "track")
        .map(s => s.id)
        .join("%2C") + "&seed_artists=" + seed
        .filter(s => s.type === "artist")
        .map(s => s.id)
        .join("%2C") + "&seed_genres=" + seed
        .filter(s => s.type === "genre")
        .map(s => s.name)
        .join("%2C");
    }
  
    let sliderQuery = "";
    if (sliders.length > 0) {
      sliderQuery = "&" + sliders
        .filter(s => s.hasBeenMoved)
        .map(s => `target_${s.name}=${s.value}`)
        .join("&");
    }
  
    const query = 
      "https://api.spotify.com/v1/recommendations?" +
      seedQuery +
      "&limit=12&market=ES" +
      sliderQuery;
      let recommend = {
        url: query,
        headers: {
          'Authorization': 'Bearer ' + tempToken
        },
        json: true
      }
    // Send the constructed query URL to the Spotify API

    
    request.get(recommend, function (error, response, body) {
      if (error) {console.log('error retrieving info from spotify') 
      res.status(500).json({ error: 'Error querying Spotify API' })}
      else {
        let payload = {};
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
      res.send({payload});
      }
  });
});
 
app.post('/search', async (req, res) => {
  if (new Date() > expiration) {
    await getAuthToken();
  }
  const { searchTerm, searchType } = req.body;
  if (searchTerm == '') { console.log('empty query') }
  let endpoint = '';
  if (searchType === 'artist') {
    endpoint = 'https://api.spotify.com/v1/search?q=' + searchTerm + '&type=artist&limit=6';
  } else if (searchType === 'track') {
    endpoint = 'https://api.spotify.com/v1/search?q=' + searchTerm + '&type=track&limit=6';
  }
  let search = {
    url: endpoint,
    headers: { 'Authorization': 'Bearer ' + tempToken },
    json: true
  }
  try {
    // use your access_token and send it with the request
    const response = request.get(search, function (error, response, body) {
      if (error || body == '') {
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
