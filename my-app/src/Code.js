import React from 'react';
import { Container, Col, Accordion } from 'react-bootstrap';

const Code = () => {
  
  return (
    <Container fluid>
    <h1 className='text-center'>Code</h1>
    <div className="m-5">
      <p>  This application combines a convenient User Interface for inputting requests with a back-end server that packages the requests and pairs them with an authentication token and displays the results</p>
      <p>The front end is React and Bootstrap, the back end is Node and Express. Next up is a pipeline for building and testing from Github instead of manual builds. Deployment is automated from Github to Railway</p></div>
    <Accordion className="m-4">
    <Accordion.Item eventKey="0">
        <Accordion.Header>Spotify API</Accordion.Header>
        <Accordion.Body>
        <p>
        The Spotify API docs are linked <a href="https://developer.spotify.com/documentation/web-api/"> Here</a>.  They require an authentication token which expires hourly in order to make requests. Because I need to generate new temporary authentication tokens, and I don't want my personal API keys exposed, I had to create a backend server to handle requests rather than query the API directly from the front end.  </p>
        <p> I make use of four of the endpoints: <ul><li>Search for Item endpoint for tracks and artists</li><li>Get Recommendations endpoint to generate the results</li>
        <li>Get Track's Audio Features endpoint for track analysis</li>
        <li>Get Track because popularity is not included in the audio features</li></ul></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Back End</Accordion.Header>
        <Accordion.Body>
         The back end stack is Node.js with Express.js.  The back end is not doing a lot of heavy lifting here, it is mostly setup as a relay between the front-end and the spotify API.  There is no database necessary, and the only libraries needed are bodyparser, dotenv, and request.  There are 3 POST endpoints for search, recommendation, and track analysis. Every hour the authentication token expires, so the server has an asynchronous function to check if the expiration has passed before it sends the request along to Spotify.  The server also strips some of the unnecessary data before it is sent to the client.
         <h4>Back End Improvements</h4>
        <p>It would be great to be able to add tracks to a playlist.  This would require the user to sign into their own spotify account, and then I would have to put all the authentication middleware in.</p>
        <p>More of the data could be stripped out before sending to the front-end. I only use one size of the images right now, for example.</p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Front End</Accordion.Header>
        <Accordion.Body>
         <p>The front end is written with React, styled with React-Bootstrap, and uses the React Router.  I originally made the MVP in vanilla javascript, and it was already pretty bulky and hard to read, so I wanted to break it down using a framework or library. I briefly attempted to make it with Vue, before deciding to stick with the React library which I knew best. Multiple pages are configured using the react router, and most of the styling comes from bootstrap components.  I used a bootswatch theme called Lux for some basic styling because I'm not a great designer, and otherwise used some !important overrides in the CSS to tweak the results.</p>
         <h4>Front-End Improvements:</h4>
         <p>I could definitely break the front-end down further into more reusable components, for example I ended up with 2 separate search components where I ought to pass a prop in telling it the type of search</p>
         <p>For this size of an application, I think loading the entire bootstrap library as well as the bootswatch Lux theme is probably pretty bloated. I also think Tailwind could have been a better choice for this application, lighter weight and more extensible</p>
         <p>There are a number of things that don't look quite the same on mobile devices.</p>
         <p>A pipeline to build and deploy the React App would be very useful.  Github actions? Jenkins?</p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Code;

