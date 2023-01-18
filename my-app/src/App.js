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
  loudness: {value: -30, hasBeenMoved: false},
  danceability: {value: .5, hasBeenMoved: false},
  popularity: {value: 50, hasBeenMoved: false},
  tempo: {value: 100, hasBeenMoved: false},
  instrumentalness: {value: .5, hasBeenMoved: false},
  speechiness: {value: .5, hasbeenMoved: false},
  valence: {value: .5, hasBeenMoved: false},
  acousticness: {value: .5, hasBeenMoved: false},
  energy: {value: .5, hasBeenMoved:false}
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
        {result.images && result.images[2] && result.images[2].url ? <img src={result.images[2].url} alt={result.name} className="seed-image mr-3" /> : <div className="seed-image mr-3"></div>}
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
<h2 className="mt-4">Optional Parameters:</h2>
  </Row>
      <div className="m-3 p-4 border border-2 border-dark" >
        <Row className="justify-content-between">
        <Slider
          name="liveness"
          label="Liveness"
          value={sliders.liveness.value}
          handleSliderChange={handleSliderChange}
          min={0}
          max={1}
          step={.1}
        />
        <Slider
          name="loudness"
          label="Loudness (dB)"
          value={sliders.loudness.value}
          handleSliderChange={handleSliderChange}
          min={-60}
          max={0}
          step={.5}
        />
        <Slider
          name="danceability"
          label="Danceability"
          value={sliders.danceability.value}
         handleSliderChange={handleSliderChange}
         min={0}
          max={1}
          step={.01}
        />
        <Slider
          name="popularity"
          label="Popularity" 
          value={sliders.popularity.value}
          handleSliderChange={handleSliderChange}
          min={0}
          max={100}
          step={1}
        />
        
        <Slider
          name="tempo"
          label="Tempo (BPM)" 
          value={sliders.tempo.value}
          handleSliderChange={handleSliderChange}
          min={40}
          max={160}
          step={1}
        />
         <Slider
          name="energy"
          label="Energy"
          value={sliders.energy.value}
          handleSliderChange={handleSliderChange}
          min={0}
          max={1}
          step={.01}
        />
         <Slider
          name="instrumentalness"
          label="Instrumentalness"
          value={sliders.instrumentalness.value}
          handleSliderChange={handleSliderChange}
          min={0}
          max={1}
          step={.01}
        />
         <Slider
          name="speechiness"
          label="Speechiness"
          value={sliders.speechiness.value}
          handleSliderChange={handleSliderChange}
          min={0}
          max={1}
          step={.01}
        />
         <Slider
          name="valence"
          label="Valence"
          value={sliders.valence.value}
          handleSliderChange={handleSliderChange}
          min={0}
          max={1}
          step={.01}
        />
         <Slider
          name="acoustiness"
          label="Acousticness"
          value={sliders.acousticness.value}
          handleSliderChange={handleSliderChange}
          min={0}
          max={1}
          step={.01}
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
