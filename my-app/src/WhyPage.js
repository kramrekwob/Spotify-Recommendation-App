import React from 'react';
import { Container } from 'react-bootstrap';

function WhyPage() {
  return (
    <>
      <Container className="text-center m-5">
        <h1 className="my-5">Why?</h1>
        <p>Sometimes I find myself stuck on the same old "Daily Mix" on Spotify.  My playlists can be stagnant and I want to get a out of my self-reinforcing bubble. This application allows the user to mess around with the internals of the Spotify algorithm to find things they might not otherwise see. This is great to freshen up playlists, and also great for less popular artists who might not get recommended very often.</p>
        <p> As far as I can tell, Spotify is the only music aggregator that has a publicly available API to expose this kind of data. I hope we can all use this app to find a few jams without an algorithm directing us back to what's most popular or profitable.</p>
      </Container>
    </>
  );
}

export default WhyPage;
