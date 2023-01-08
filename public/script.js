// import { autocomplete } from '@algolia/autocomplete-js';
// import '@algolia/autocomplete-theme-classic';
const requestform = document.querySelector('form');
requestform.addEventListener('submit', formSubmitted);
const results = document.querySelector('#results');
const seeds = document.querySelector('.seeds');
const sliders = document.querySelectorAll('input[type=range]');

//When form has been submitted, gather all final slider paramaters that have been touched, the seeds, send POST request
function formSubmitted(event) {
  event.preventDefault();
  let params = [];
  for (var i = 0; i < requestform.elements.length; i++) {
    console.log(requestform.elements[i])
    params.push(requestform.elements[i].name + '=' + requestform.elements[i].value);
  }
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

var query = "https://api.spotify.com/v1/recommendations/?limit=10&market=ES";

//called upon submit, will gather all sliders that have been moved and the seeds and create a query to POST
function getResults() {
  for (let i = 0; i < requestform.elements.length; i++) {
    query += '&' + requestform.elements[i].name + '=' + requestform.elements[i].value;
    // console.log(query)
  }
  //why won't this post?
  fetch('/recommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query})
  }).then(response => response.json()).then(console.log(response));
}


// Later will use autocomplete functions to show available artists and tracks
// autocomplete({
//   container: '#autocomplete',
//   placeholder: 'Search for products',
//   getSources() {
//     return [];
//   },
// });
