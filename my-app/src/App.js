import './App.css';
import React, { useState } from 'react';
import SearchBox from './Searchbox'
import Slider from './Slider';
import GetRecommendations from './GetRecommendations';

function App() {

const [recommendations, setRecommendations] = useState([]);
const handleRecommendations = (data) => {
  setRecommendations(data);
}
  return (
    <main>
      <h1 className="text-center my-5">Spotify Recommendation App</h1>
      <div className="App">
        <SearchBox className="container flex" />
      <form className="container" action="" method="" id="mainform">
        <Slider
          name="liveness"
          label="Liveness"
        />
        <Slider
          name="loudness"
          label="Loudness"
        />
        <Slider
          name="danceability"
          label="Danceability"
        />
        <Slider
          name="popularity"
          label="Popularity"
        />
        <Slider
          name="tempo"
          label="Tempo"
        />
      </form>
      <GetRecommendations handleRecommendations={handleRecommendations}/>
      </div>
    </main>
  );
}

export default App;
