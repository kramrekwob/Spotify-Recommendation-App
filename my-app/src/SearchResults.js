import React, { useState } from 'react';
import { Card, CardGroup, Image, OverlayTrigger, Tooltip, Row, Container} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';


function SearchResults(props) {
  const { results, handleResultClick } = props;
  const [hoveredResult, setHoveredResult] = useState(null);

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