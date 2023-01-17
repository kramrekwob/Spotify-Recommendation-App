import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const TrackData = ({ data }) => {
  const { danceability, energy, loudness, speechiness, acousticness, instrumentalness, liveness, valence, tempo } = data;

  return (
    <div>
      <ProgressBar now={danceability * 100} label={`Danceability: ${danceability}`} />
      <ProgressBar now={energy * 100} label={`Energy: ${energy}`} />
      <ProgressBar now={(0.5 - loudness / 60) * 100} label={`Loudness: ${loudness}`} />
      <ProgressBar now={speechiness * 100} label={`Speechiness: ${speechiness}`} />
      <ProgressBar now={acousticness * 100} label={`Acousticness: ${acousticness}`} />
      <ProgressBar now={instrumentalness * 100} label={`Instrumentalness: ${instrumentalness}`} />
      <ProgressBar now={liveness * 100} label={`Liveness: ${liveness}`} />
      <ProgressBar now={valence * 100} label={`Valence: ${valence}`} />
      <ProgressBar now={tempo} label={`Tempo: ${tempo}`} />
    </div>
  );
};

export default TrackData;
