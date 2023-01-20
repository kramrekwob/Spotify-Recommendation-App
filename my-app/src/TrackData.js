import React from 'react';
import { ProgressBar, Image, Row } from 'react-bootstrap';

const TrackData = ({ data }) => {
  const { analysis, name, albumArt, popularity } = data;
  const { danceability, energy, loudness, speechiness, acousticness, instrumentalness, liveness, valence, tempo } = analysis;
  console.log(analysis)
  return (
    <div>
      <Row>
        <div className="col-12 col-sm-4 mb-3">
          <h2 className="text-center">{name}</h2>
          <Image src={albumArt} alt={name} fluid className="p-5"/>
        </div>
        <div className="col-12 col-sm-8 d-flex align-items-center px-4">
            <div className="col-12">
            <Row className="d-flex align-items-center">
                <div className="col-3">Popularity</div>
                <div className="col-6">
                  <ProgressBar animated variant="dark" now={popularity} label={`${popularity}`} />
                </div>
                <div className="col-3">{popularity}</div>
              </Row>
              <Row className="d-flex align-items-center">
                <div className="col-3">Danceability</div>
                <div className="col-6">
                  <ProgressBar animated variant="success" now={danceability * 100} label={`${danceability}`} />
                </div>
                <div className="col-3">{danceability}</div>
              </Row>
              <Row className="d-flex align-items-center">
                <div className="col-3">Energy</div>
                <div className="col-6">
                  <ProgressBar animated variant="warning" now={energy * 100} label={`${energy}`} />
                </div>
                <div className="col-3">{energy}</div>
              </Row>
              <Row className="d-flex align-items-center">
                <div className="col-3">Loudness</div>
                <div className="col-6">
                  <ProgressBar animated variant="info" now={(loudness + 60) / 60 * 100} label={`${loudness}`} />
                </div>
                <div className="col-3">{loudness}</div>
              </Row> 
              <Row className="d-flex align-items-center">
                <div className="col-3">Acousticness</div>
                <div className="col-6">
                  <ProgressBar animated variant="danger" now={acousticness * 100} label={`${acousticness}`} />
                </div>
                <div className="col-3">{acousticness}</div>
              </Row>
              <Row className="d-flex align-items-center">
                <div className="col-3">Speechiness</div>
                <div className="col-6">
                  <ProgressBar animated variant="dark" now={speechiness * 100} label={`${speechiness}`} />
                </div>
                <div className="col-3">{speechiness}</div>
              </Row>
              <Row className="d-flex align-items-center">
                <div className="col-3">Liveness</div>
                <div className="col-6">
                  <ProgressBar animated variant="success" now={liveness * 100} label={`${liveness}`} />
                </div>
                <div className="col-3">{liveness}</div>
              </Row>
              <Row className="d-flex align-items-center">
                <div className="col-3">Valence</div>
                <div className="col-6">
                  <ProgressBar animated variant="warning" now={valence * 100} label={`${valence}`} />
                </div>
                <div className="col-3">{valence}</div>
              </Row>
              <Row className="d-flex align-items-center">
                <div className="col-3">Tempo</div>
                <div className="col-6">
                  <ProgressBar animated variant="info" now={(tempo - 60) / (1.2)} label={`${tempo}`} />
                </div>
                <div className="col-3">{tempo}</div>
              </Row>
              <Row className="d-flex align-items-center">
                <div className="col-3">Instrumentalness</div>
                <div className="col-6">
                  <ProgressBar animated variant="danger" now={instrumentalness * 100} label={`${instrumentalness}`} />
                </div>
                <div className="col-3">{instrumentalness}</div>
              </Row>
              </div>
        </div>
        </Row>
    </div>

  );
};

export default TrackData;
