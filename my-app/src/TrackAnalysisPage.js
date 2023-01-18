import React, { useState } from "react";
import { TrackData } from "./TrackData";
import {Button, Form} from ".react-bootstrap";
import axios from 'axios'

function TrackAnalysis() {
  const [trackData, setTrackData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('')

const handleSearchTerm = (e) =>{
    setSearchTerm(e.target.value)
  }

const handleTrackAnalysis = async (e) => {

    e.preventDefault();
    if (!searchTerm) {
      return;
    }
    try {
      const data = track.id;
      const res = await axios.post('/trackanalysis', data);
      setTrackData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Form.Control type="search" aria-describedby="artistText" placeholder="Enter an artist or track" value={searchTerm} onChange={handleSearchTerm} />
    <Button type="submit">Search</Button>
      <Button onClick={handleTrackAnalysis}>
        Analyze Track
      </Button>
      {trackData && <TrackData data={trackData} />}
    </>
  );
}

export default TrackAnalysis;
