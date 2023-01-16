import './App.css';
import React, { useState } from 'react';
import SearchBox from './Searchbox'
import Slider from './Slider';
import GetRecommendations from './GetRecommendations';
import {Row, Col, Container} from 'react-bootstrap'
import Display from './ResultsCards'

function App() {
const [recommendations, setRecommendations] = useState([]);
const [selectedResults, setSelectedResults] = useState([]);
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
  return (
    <main>
      <h1 className="text-center my-5">Spotify Recommendation App</h1>
      <div className="App">
        <SearchBox handleResultClick={handleResultClick} className="container flex" />
      <Container className="container" >
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
      </Container>
          <div className="mt-5">
      <span>Up to 5 Seeds Can Be Selected:</span><Row>
          {selectedResults.slice(0, 5).map((result, index) => (
            <Col><span key={index}> {result.name}</span></Col>
          ))}
          </Row>
      </div>
      <GetRecommendations handleRecommendations={handleRecommendations} selectedResults={selectedResults} sliders={sliders}/>
      </div>
      <Display recommendations={recommendations}/>
    </main>
  );
}

export default App;
