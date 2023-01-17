import './App.css';
import React, { useState } from 'react';
import SearchBox from './Searchbox'
import Slider from './Slider';
import GetRecommendations from './GetRecommendations';
import {Row, Col, Container, Button} from 'react-bootstrap'
import ResultsCards from './ResultsCards'


function App() {
const [recommendations, setRecommendations] = useState([]);
const [selectedResults, setSelectedResults] = useState([]);
const [showResults, setShowResults] = useState(false);

const [sliders, setSliders] = useState({
  liveness: {value: .5, hasBeenMoved: false},
  loudness: {value: .5, hasBeenMoved: false},
  danceability: {value: .5, hasBeenMoved: false},
  popularity: {value: .5, hasBeenMoved: false},
  tempo: {value: .5, hasBeenMoved: false},
});
const handleRecommendations = (data) => {
  setRecommendations(data);
}
const handleResultClick = (result) => {
  if (result.name === '') return;
  if (selectedResults.length === 5) {
    return;
  }
  if (result.type === "artist" || result.type === "track") {
    if (selectedResults.some(res => res.id === result.id)) {
      return;
    }
    setSelectedResults([...selectedResults, result]);
  }
  if (result.type === "genre") {
    setSelectedResults([...selectedResults, result]);
  }
}

const handleSliderChange = (sliderName, newValue) => {
  setSliders({
      ...sliders,
      [sliderName]: { value: newValue, hasBeenMoved: true }
  });
}
const handleShowResults = () => {
  setShowResults(true);
}

const handleShowInitialScreen = () => {
  setShowResults(false);
}
function clearStates() {
  setSelectedResults([]);
  setSliders({
    liveness: {value: .5, hasBeenMoved: false},
    loudness: {value: .5, hasBeenMoved: false},
    danceability: {value: .5, hasBeenMoved: false},
    popularity: {value: .5, hasBeenMoved: false},
    tempo: {value: .5, hasBeenMoved: false},
  });
}

  return (
    <main>
      <div className="App" style={{transition: 'all 0.5s ease-in-out'}}>
      {showResults ?  <ResultsCards recommendations={recommendations} handleShowInitialScreen={handleShowInitialScreen}></ResultsCards> : 
      <div>
        <SearchBox handleResultClick={handleResultClick} className="container flex" />
        <div className="d-flex container justify-content-between align-items-center border border-primary">
  <div className="seed-header">Up to 5 Seeds Can Be Selected:</div>
  <div className="d-flex flex-row align-items-center justify-content-start">
    {selectedResults.slice(0, 5).map((result, index) => (
      <div className="seed-container d-flex align-items-center mr-3" key={index}>
        {result.images[2] ? <img src={result.images[2].url} alt={result.name} className="seed-image mr-3" /> : <div className="seed-image mr-3"></div>}
        <span>{result.name}</span>
      </div>
    ))}
  </div>
</div>
<Row>
<div className="d-flex justify-content-center mt-3">
  <GetRecommendations clearStates={clearStates} handleRecommendations={handleRecommendations} selectedResults={selectedResults} sliders={sliders} handleShowResults={handleShowResults}/>
    <Button variant="warning" onClick={() => clearStates()}>Clear</Button>
  </div>
  <div>A</div>
  </Row>
      <div className="m-5" >
        <Row className="justify-content-between">
        <Slider
          name="liveness"
          label="Liveness"
          value={sliders.liveness.value}
          handleSliderChange={handleSliderChange}
        />
        <Slider
          name="loudness"
          label="Loudness"
          value={sliders.loudness.value}
          handleSliderChange={handleSliderChange}
        />
        <Slider
          name="danceability"
          label="Danceability"
          value={sliders.danceability.value}
         handleSliderChange={handleSliderChange}
        />
        <Slider
          name="popularity"
          label="Popularity" value={sliders.popularity.value}
          handleSliderChange={handleSliderChange}
        />
        
        <Slider
          name="tempo"
          label="Tempo" value={sliders.tempo.value}
          handleSliderChange={handleSliderChange}
        />
        </Row>
      </div>
      </div> 
      }
      </div>
    </main>
  );
}

export default App;
