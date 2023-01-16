import React from 'react';
import { Container } from 'react-bootstrap';

function WhyPage() {
  return (
    <>
      <Container className="text-center mt-5">
        <h1>Why?</h1>
        <p>Do you remember back when Pandora was still 'the Music Genome Project'?  I do.   I miss being able to find new music based on all kinds of parameters that aren't linked to my personal user ID or 'algorithm'.  It allowed me to get outside of my own musical bubble. As far as I can tell, Spotify is the only music aggregator that has a publicly available API to expose this kind of data. I hope we can all use this app to find a few jams without an algorithm directing us back to what's popular or profitable.</p>
      </Container>
    </>
  );
}

export default WhyPage;
