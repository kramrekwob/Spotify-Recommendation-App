import React from 'react';
import { ProgressBar, Image, Row } from 'react-bootstrap';

const TrackData = ({ data }) => {
  const { analysis, name, albumArt, popularity } = data;
  const { danceability, energy, loudness, speechiness, acousticness, instrumentalness, liveness, valence, tempo } = analysis;

  return (
    <div>
      <Row>
        <div className="col-12 col-sm-4 mb-3">
          <h2 className="text-center">{name}</h2>
          <Image src={albumArt} alt={name} fluid />
        </div>
        <div className="col-12 col-sm-8 d-flex align-items-center">
          <Row>
            <div className="row">
            <ProgressBar animated variant="success" now={danceability * 100} label={`Danceability: ${danceability}`} /><span className="progress-span">{danceability}</span> </div>
            <ProgressBar animated variant="warning" now={energy * 100} label={`Energy: ${energy}`} />
            <span className="progress-span">{energy}</span>
            <ProgressBar animated variant="info" now={loudness} label={`Loudness: ${loudness}`} />
            <span className="progress-span">{loudness}</span>
            <ProgressBar animated variant="danger" now={speechiness * 100} label={`Speechiness: ${speechiness}`} /><span className="progress-span">{speechiness}</span>
            <ProgressBar animated variant="dark" now={acousticness * 100} label={`Acousticness: ${acousticness}`} /><span className="progress-span">{acousticness}</span>
            <ProgressBar animated variant="success" now={instrumentalness * 100} label={`Instrumentalness: ${instrumentalness}`} /><span className="progress-span">{instrumentalness}</span>
            <ProgressBar animated variant="warning" now={liveness * 100} label={`Liveness: ${liveness}`} /><span className="progress-span">{liveness}</span>
            <ProgressBar animated variant="info" now={valence * 100} label={`Valence: ${valence}`} /><span className="progress-span">{valence}</span>
            <ProgressBar animated variant="danger" now={tempo} label={`Tempo: ${tempo}`} /><span className="progress-span">{tempo}</span>
            <ProgressBar animated variant="dark" now={popularity} label={`Popularity: ${popularity}`} /><span className="progress-span">{popularity}</span>
          </Row>
        </div>
      </Row>
    </div>

  );
};

export default TrackData;
