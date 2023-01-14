import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('artist'); // Default search type is artist
  const [genres, setGenres] = useState([]); // genres state variable

  // Handle search input changes
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  }

  // Handle search type changes
  const handleSearchType = (e) => {
    setSearchType(e.target.value);
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { searchTerm, searchType };
      const res = await axios.post('/search', data);
      setSearchResults(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='input-group container flex'>
      <form onSubmit={handleSubmit} className='col-6'>
        <label className="form-label">Select an Artist or Track as a Seed</label>
        <input type="search" placeholder="Search for an artist or track" value={searchTerm} className="mx-4" onChange={handleSearchInput} />
        <select value={searchType} onChange={handleSearchType}>
          <option value="artist">Artist</option>
          <option value="track">Track</option>
        </select>
        <button type="submit">Search</button>
        <label> OR Select a Genre:</label>
        <div class="input-group mb-3 d-flex justify-content-center">
      <div className="col-6">
      <label className="col-1 input-group-text" for="inputGroupSelect01">Genre</label>
      <select name="seed_genres" className="form-select parameter" id="inputgroup">
        <option value="acoustic">- Acoustic -</option>
        <option value="afrobeat">- Afrobeat -</option>
        <option value="alt-rock">- Alt-rock -</option>
        <option value="alternative">- Alternative -</option>
        <option value="ambient">- Ambient -</option>
        <option value="anime">- Anime -</option>
        <option value="black-metal">- Black-metal -</option>
        <option value="bluegrass">- Bluegrass -</option>
        <option value="blues">- Blues -</option>
        <option value="bossanova">- Bossanova -</option>
        <option value="brazil">- Brazil -</option>
        <option value="breakbeat">- Breakbeat -</option>
        <option value="british">- British -</option>
        <option value="cantopop">- Cantopop -</option>
        <option value="chicago-house">- Chicago-house -</option>
        <option value="children">- Children -</option>
        <option value="chill">- Chill -</option>
        <option value="classical">- Classical -</option>
        <option value="club">- Club -</option>
        <option value="comedy">- Comedy -</option>
        <option value="country">- Country -</option>
        <option value="dance">- Dance -</option>
        <option value="dancehall">- Dancehall -</option>
        <option value="death-metal">- Death-metal -</option>
        <option value="deep-house">- Deep-house -</option>
        <option value="detroit-techno">- Detroit-techno -</option>
        <option value="disco">- Disco -</option>
        <option value="disney">- Disney -</option>
        <option value="drum-and-bass">- Drum-and-bass -</option>
        <option value="dub">- Dub -</option>
        <option value="dubstep">- Dubstep -</option>
        <option value="edm">- Edm -</option>
        <option value="electro">- Electro -</option>
        <option value="electronic">- Electronic -</option>
        <option value="emo">- Emo -</option>
        <option value="folk">- Folk -</option>
        <option value="forro">- Forro -</option>
        <option value="french">- French -</option>
        <option value="funk">- Funk -</option>
        <option value="garage">- Garage -</option>
        <option value="german">- German -</option>
        <option value="gospel">- Gospel -</option>
        <option value="goth">- Goth -</option>
        <option value="grindcore">- Grindcore -</option>
        <option value="groove">- Groove -</option>
        <option value="grunge">- Grunge -</option>
        <option value="guitar">- Guitar -</option>
        <option value="happy">- Happy -</option>
        <option value="hard-rock">- Hard-rock -</option>
        <option value="hardcore">- Hardcore -</option>
        <option value="hardstyle">- Hardstyle -</option>
        <option value="heavy-metal">- Heavy-metal -</option>
        <option value="hip-hop">- Hip-hop -</option>
        <option value="holidays">- Holidays -</option>
        <option value="honky-tonk">- Honky-tonk -</option>
        <option value="house">- House -</option>
        <option value="idm">- Idm -</option>
        <option value="indian">- Indian -</option>
        <option value="indie">- Indie -</option>
        <option value="indie-pop">- Indie-pop -</option>
        <option value="industrial">- Industrial -</option>
        <option value="iranian">- Iranian -</option>
        <option value="j-dance">- J-dance -</option>
        <option value="j-idol">- J-idol -</option>
        <option value="j-pop">- J-pop -</option>
        <option value="j-rock">- J-rock -</option>
        <option value="jazz">- Jazz -</option>
        <option value="k-pop">- K-pop -</option>
        <option value="kids">- Kids -</option>
        <option value="latin">- Latin -</option>
        <option value="latino">- Latino -</option>
        <option value="malay">- Malay -</option>
        <option value="mandopop">- Mandopop -</option>
        <option value="metal">- Metal -</option>
        <option value="metal-misc">- Metal-misc -</option>
        <option value="metalcore">- Metalcore -</option>
        <option value="minimal-techno">- Minimal-techno -</option>
        <option value="movies">- Movies -</option>
        <option value="mpb">- Mpb -</option>
        <option value="new-age">- New-age -</option>
        <option value="new-release">- New-release -</option>
        <option value="opera">- Opera -</option>
        <option value="pagode">- Pagode -</option>
        <option value="party">- Party -</option>
        <option value="philippines-opm">- Philippines-opm -</option>
        <option value="piano">- Piano -</option>
        <option value="pop">- Pop -</option>
        <option value="pop-film">- Pop-film -</option>
        <option value="post-dubstep">- Post-dubstep -</option>
        <option value="power-pop">- Power-pop -</option>
        <option value="progressive-house">- Progressive-house -</option>
        <option value="psych-rock">- Psych-rock -</option>
        <option value="punk">- Punk -</option>
        <option value="punk-rock">- Punk-rock -</option>
        <option value="r-n-b">- R-n-b -</option>
        <option value="rainy-day">- Rainy-day -</option>
        <option value="reggae">- Reggae -</option>
        <option value="reggaeton">- Reggaeton -</option>
        <option value="road-trip">- Road-trip -</option>
        <option value="rock-n-roll">- Rock-n-roll -</option>
        <option value="rockabilly">- Rockabilly -</option>
        <option value="romance">- Romance -</option>
        <option value="sad">- Sad -</option>
        <option value="salsa">- Salsa -</option>
        <option value="samba">- Samba -</option>
        <option value="sertanejo">- Sertanejo -</option>
        <option value="show-tunes">- Show-tunes -</option>
        <option value="singer-songwriter">- Singer-songwriter -</option>
        <option value="ska">- Ska -</option>
        <option value="sleep">- Sleep -</option>
        <option value="songwriter">- Songwriter -</option>
        <option value="soul">- Soul -</option>
        <option value="soundtracks">- Soundtracks -</option>
        <option value="spanish">- Spanish -</option>
        <option value="study">- Study -</option>
        <option value="summer">- Summer -</option>
        <option value="swedish">- Swedish -</option>
        <option value="synth-pop">- Synth-pop -</option>
        <option value="tango">- Tango -</option>
        <option value="techno">- Techno -</option>
        <option value="trance">- Trance -</option>
        <option value="trip-hop">- Trip-hop -</option>
        <option value="turkish">- Turkish -</option>
        <option value="work-out">- Work-out -</option>
        <option value="world-music">- World-music -</option>

      </select>
      <div class="row">
        <button type="submit" class="btn btn-primary" id="submit">Submit</button>
      </div>
      </div>
    </div>
      </form>
      {searchResults.length > 0 && (
        <div>
          <h3>Results</h3>
          <ul>
          {searchResults.map((result, index) => {
            return (
            <div className="card" style={width:20%}>
              <li key={index}>

                <p className="">{result.name}</p>
                  <img src={result.images[2].url} alt={result.name} />
              </li>
              </div>
            );
          })}
        </ul>
      </div>
    )}
  </div>
);
        }
export default SearchBox;