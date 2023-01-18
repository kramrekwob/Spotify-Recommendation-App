import React, { useState } from 'react';
import { Card, CardGroup, Image, OverlayTrigger, Tooltip, Row, Container } from 'react-bootstrap';

function SearchResults(props) {
  const { results, handleResultClick } = props;
  console.log(results)
  return (
    <CardGroup className="my-3">
      <Container>
      <Row>
      {results.map((result, index) => {
        return (
          <OverlayTrigger key={result.id}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${result.id}`}>
                {result.name}
              </Tooltip>
            }>
            <Card key={index} onClick={() => handleResultClick(result)} className="hoverable col-sm-6 col-md-2">
              <div className="imageContainer">
              <Image src={result.images[1]? result.images[1].url : '/defaultImage.jpg'} alt={result.name} fluid className="searchImages"/> </div>
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Subtitle>{ result.type === "track" ? 
    (result.artist.length > 1
        ? "Artists: " + result.artist.map((artist, index) => artist.name).join(", ")
        : "Artist: " + result.artist[0].name) 
    : ""
}
    </Card.Subtitle>
              </Card.Body>
            </Card>
          </OverlayTrigger>
        )
      })}
      </Row>
      </Container>
    </CardGroup>

  )
}
export default SearchResults