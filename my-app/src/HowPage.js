import React from 'react';
import { Accordion } from 'react-bootstrap';

const HowPage = () => {
  return (
    <>

    <h1 className='text-center'>How?</h1>
    <div className="m-5">
      <p>A "Seed" is like when you click "Go to Radio" on a track, album, or artist. The Spotify API allows up to 5 seeds to be used to generate recommendations. It then takes the details of these seeds and uses an algorithm to populate the top tracks. Think of it like starting a playlist and spotify picks the next few tracks.</p>
       <p> The parameters are listed below, their names and values were not self-explanatory for me. Remember that if a parameter is not moved, then it is not added to the query of the Spotify API. In other words, if you do not move any of the slider components of the "Optional Parameters" section, the request will only be based on the seeds.  Since a middle value would still be opinionated, they are ommitted.  Only alter parameters that you want included in the results.</p>
       </div>
    <Accordion className="m-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Acousticness</Accordion.Header>
        <Accordion.Body>
          A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Danceability</Accordion.Header>
        <Accordion.Body>
        Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Energy</Accordion.Header>
        <Accordion.Body>
        Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Instrumentalness</Accordion.Header>
        <Accordion.Body>
        Predicts whether a track contains no vocals. ???Ooh??? and ???aah??? sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly ???vocal???. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
        </Accordion.Body>
      </Accordion.Item> 
      <Accordion.Item eventKey="4">
        <Accordion.Header>Liveness</Accordion.Header>
        <Accordion.Body>
        Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Loudness</Accordion.Header>
        <Accordion.Body>
        The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db.
        -That's the official description.  I use -60 to 0 because that's what the documentation says, but I haven't seen any tracks near the bottom of that range. 
        </Accordion.Body>
      </Accordion.Item>  
        <Accordion.Item eventKey="6">
        <Accordion.Header>Speechiness</Accordion.Header>
        <Accordion.Body>
        Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Valence (Positivity)</Accordion.Header>
        <Accordion.Body>
        A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Tempo</Accordion.Header>
        <Accordion.Body>
        The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. I use 60 to 180 BPM as my minimum and maximum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Popularity</Accordion.Header>
        <Accordion.Body>
        The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Artist and album popularity is derived mathematically from track popularity. Note that the popularity value may lag actual popularity by a few days: the value is not updated in real time.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default HowPage;
