// import { autocomplete } from '@algolia/autocomplete-js';
// import '@algolia/autocomplete-theme-classic';
const inputs = document.querySelectorAll('.parameter');
const requestform = document.getElementById('mainform')
requestform.addEventListener('submit', formSubmitted);
const results = document.querySelector('#results');
const seeds = document.querySelector('.seeds');
const sliders = document.querySelectorAll('input[type=range]');
console.log(inputs)
//When form has been submitted, gather all final slider parameters that have been touched, the seeds, send POST request
function formSubmitted(event) {
  event.preventDefault();
  let params = [];
  for (var i = 0; i < inputs.length; i++) {
    params.push(inputs[i].name + '=' + inputs[i].value);
  }
  // console.log(params)
  getResults();
}

//add event listeners to the sliders to show the numbers as they are changed
for (let i = 0; i < sliders.length; i++) {
  //only want this to show up once its been changed, later on I will make it so that it is only a parameter when it has been changed
  sliders[i].addEventListener('change', function () {
    sliders[i].nextElementSibling.innerHTML = sliders[i].value
    // console.log(sliders[i].value);
  })
}

// const popularitySlider = document.getElementById("popularity")
// popularitySlider.oninput = function() {
//   newValue = popularitySlider.ariaValueMax;
//   document.getElementById("popdisplay").innerHTML = this.value;
// };

var query = "https://api.spotify.com/v1/recommendations/?limit=3&market=ES";

//called upon submit, will gather all sliders that have been moved and the seeds and create a query to POST
function getResults() {
  let seedChoices = {};
  let levels = [];
  for (let i = 0; i < inputs.length-1; i++) {
    if (inputs[i].name == 'seed_genres') {
      query += inputs[i].name + '=' + inputs[i].value
    }
    if (i == inputs.length-1) {query += '%2C' + inputs[i].value}
    else {
      query += '&' + inputs[i].name + '=' + inputs[i].value;}
    };
  
  fetch('/recommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query})
  }).then(resp => resp.json())
  .then(data => {displayResults(data.payload)}).catch(err => { console.log(err) });;
}
//displaying results 
function displayResults(payload) {
  let songArray = Object.entries(payload);
  console.log(songArray)
  for (let i=0; i<songArray.length; i++){
    let thisCard = 'card' + i;
    let card = document.getElementById(thisCard);
    let artist = songArray[i][1][2][0].name
    console.log(artist)
    card.firstChild.src=songArray[i][1][1][1].url;
   card.getElementsByClassName("card-title")[0].innerHTML = songArray[i][0]
    card.getElementsByClassName('card-text')[0].innerHTML += artist
    card.getElementsByClassName('card-text')[1].innerHTML += songArray[i][1][3]
    card.getElementsByClassName('card-text')[2].innerHTML += songArray[i][1][4]
    card.getElementsByClassName('btn-success')[0].setAttribute("href",songArray[i][1][5] );
    card.getElementsByClassName('btn-warning')[0].setAttribute("href", songArray[i][1][6]);
  }

}

// Later will use autocomplete functions to show available artists and tracks
// autocomplete({
//   container: '#autocomplete',
//   placeholder: 'Search for products',
//   getSources() {
//     return [];
//   },
// });
