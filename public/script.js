// import { autocomplete } from '@algolia/autocomplete-js';

// import '@algolia/autocomplete-theme-classic';
const requestform = document.querySelector('form');
const results = document.querySelector('#results')
const seeds = document.querySelector('.seeds');
requestform.addEventListener('submit', formSubmitted);

//on submit gather all final slider paramaters, the seeds, and GET from api
function formSubmitted(event) {
  event.preventDefault();
  let params = [];
  for (var i = 0; i < requestform.elements.length; i++) {
    console.log(requestform.elements[i])
    params.push(requestform.elements[i].name + '=' + requestform.elements[i].value);
  }
  getResults();
}

let sliders = document.querySelectorAll('input[type=range]');

for (let i = 0; i < sliders.length; i++) {
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

let query = "https://api.spotify.com/v1/recommendations/?limit=10&market=ES&";

function getResults() {
  for (let i = 0; i < requestform.elements.length; i++) {
    query += '&' + requestform.elements[i].name + '=' + requestform.elements[i].value;
    // console.log(query)
  }
  fetch('/recommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify(query)
  });
}

// }
// autocomplete({
//   container: '#autocomplete',
//   placeholder: 'Search for products',
//   getSources() {
//     return [];
//   },
// });
