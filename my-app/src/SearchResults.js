import React, { useState } from 'react';
import { Card, CardGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

function SearchResults(props) {
  const { results, handleResultClick } = props;
  const [hoveredResult, setHoveredResult] = useState(null);

  const handleHover = (result) => {
    setHoveredResult(result);
  }
  return (
    <CardGroup className="mb-2">

      {results.map((result, index) => {
        return (
          <OverlayTrigger key={result.id}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${result.id}`}>
                {result.name}
              </Tooltip>
            }>
            <Card key={index}
              onMouseEnter={() => handleHover(result)} onClick={() => handleResultClick(result)} className={hoveredResult === result ? 'highlighted-card' : ''}>
              <Image src={result.images[2].url} alt={result.name} fluid />
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
              </Card.Body>
            </Card>
          </OverlayTrigger>
        )
      })}
    </CardGroup>
  )
}
export default SearchResults