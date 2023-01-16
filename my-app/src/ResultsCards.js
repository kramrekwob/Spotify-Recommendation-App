import React, { useState } from 'react';

import { Card, Button, Image, CardText, CardGroup } from 'react-bootstrap';


function ResultsCards({ handleShowInitialScreen, recommendations }) {
    if (!recommendations) {
        return <div>Results Will be Displayed Here</div>;
    } else console.log(recommendations)
    return (
        <div>
            <Button onClick={handleShowInitialScreen}>Search Again</Button>
            <div className="card-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, fr))', gridGap: '1px' }}>

                {recommendations && Object.values(recommendations).map((song, index) => (
                    <Card className="m-1" key={index}>
                        <Image topwidth="100%" src={song[1][0] ? song[1][0].url : '/defaultImage.jpg'} alt="Card image cap" />
                        <Card.Body>
                            <Card.Title>{song[0]}</Card.Title>
                            <Card.Text>
                                {
                                    song[2].length > 1
                                        ? "Artists: " + song[2].map((artist, index) => artist.name).join(", ")
                                        : "Artist: " + song[2][0].name
                                }
                                 <div>Album: {song[3]}</div>
                                <div>Release: {song[4]}</div>
                            </Card.Text>
                            <Button variant="success" target="_blank" href={song[5]} rel="noopener noreferrer">Spotify Link</Button>
                            <Button variant="warning" target="_blank" href={song[6]} rel="noopener noreferrer">Preview</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}
export default ResultsCards