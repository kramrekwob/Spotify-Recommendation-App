import React, { useState } from "react";
import TrackData from "./TrackData";
import { Button, Form, InputGroup, Card, CardGroup, Row, Image } from "react-bootstrap";
import axios from 'axios'

function TrackAnalysisPage() {
  const [trackData, setTrackData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [trackSearchResults, setTrackSearchResults] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    searchTerm.trim()
    if (!searchTerm) {
      return;
    }
    try {
      const data = { searchTerm, searchType: "track" };
      const res = await axios.post('/search', data);
      setTrackSearchResults(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleTrackAnalysis = async (result) => {
    try {
      const res = await axios.post('/trackanalysis', { id: result.id });
      console.log(res.data)
      setTrackData(res.data);
    } catch (error) {
      console.log('Error retrieving track analysis');
    }
  }
  return (
    <>
    <div className="mx-5">
    <Form onSubmit={handleSubmit}>
  <InputGroup className="mb-3">
    <Form.Control
      placeholder="Search for a track"
      aria-label="Search for a track"
      aria-describedby="basic-addon2"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
    <Button type="submit" variant="outline-secondary">Search</Button>
  </InputGroup>
</Form>
      </div>
      <CardGroup className="m-5">
        <Row>
          {trackSearchResults.map((result, index) => {
            return (
              <Card key={index} onClick={() => handleTrackAnalysis(result)} className="hoverable col-6 col-md-2">
                <Image variant="top" src={result.images[1] ? result.images[1].url : '/defaultImage.jpg'} alt={result.name} fluid className="searchImages" />
                <Card.Body>
                  <Card.Title>{result.name}</Card.Title>
                  <Card.Subtitle> {Object.values(result.artist).length > 1
                    ? "Artists: " + Object.values(result.artist).map(artist => artist.name).join(", ")
                    : "Artist: " + Object.values(result.artist)[0].name
                  }</Card.Subtitle>
                </Card.Body>
              </Card>
            )
          })}
        </Row>
      </CardGroup>

      <div class="container">
        {trackData ? <TrackData data={trackData} /> : null}
      </div>


    </>
  );

};
export default TrackAnalysisPage;
