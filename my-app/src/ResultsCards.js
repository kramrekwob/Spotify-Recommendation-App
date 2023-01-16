import React, { useState } from 'react';

import { Card, Button, Image, CardText, CardGroup } from 'react-bootstrap';

function ResultsCards({ recommendations }) {
    if (!recommendations) {
        return <div>Results Will be Displayed Here</div>;
      } else console.log(recommendations)
    return (
        <CardGroup>
            {recommendations && Object.values(recommendations).map((song, index) => (
                <Card key={index}>
                    <Image top width="100%" src={song[1][0].url} alt="Card image cap" />
                    <Card.Body>
                        <Card.Title>{song[0]}</Card.Title>
                        <Card.Text>
                            {song[2].map((artist, index) => (
                                <p key={index}>{artist.name}</p>
                            ))}
                            <p>{song[3]}</p>
                            <p>{song[4]}</p>
                        </Card.Text>
                        <Button href={song[5]}>Spotify Link</Button>
                        <Button href={song[6]}>Preview</Button>
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
    )
}
export default ResultsCards