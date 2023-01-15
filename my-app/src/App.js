import './App.css';
import SearchBox from './Searchbox'
import Slider from './Slider';
function App() {
  return (
    <body>
      <h1 className="text-center my-5">Spotify Recommendation App</h1>
      <div className="App">
        <SearchBox className="container flex" />
      <form class="container" action="" method="" id="mainform">
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
      </div>
    </body>
  );
}

export default App;
