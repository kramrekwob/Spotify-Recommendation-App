import React, { useState } from 'react';
import axios from 'axios';
import {Button, Form, InputGroup, Row, Col, Dropdown, FloatingLabel, DropdownButton, Container} from 'react-bootstrap';
import InputGroupGenres from './InputGroupGenres'
import SearchResults from './SearchResults';


const SearchBox = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('artist'); // Default search type is artist
  // const [selectedResults, setSelectedResults] = useState([]);
  

  // Handle search input changes
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  }

  // Handle search type changes
  const handleSearchType = (e) => {
    setSearchType(e.target.value);
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    searchTerm.trim()
    if (!searchTerm) {
      return;
    }
    try {
      const data = { searchTerm, searchType };
      const res = await axios.post('/search', data);
      setSearchResults(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className="">
      <Form onSubmit={handleSubmit} className='container m-0' >
        <Row className="">
          <Col xs="6">
            <Row>
              <InputGroup>
              <DropdownButton title={searchType} value={searchType} onSelect={(value) => setSearchType(value)}>
  <Dropdown.Item eventKey="artist">Artist</Dropdown.Item>
  <Dropdown.Item eventKey="track">Track</Dropdown.Item>
</DropdownButton>
                <FloatingLabel label="Artist or Track">
                  <Form.Control type="search" aria-describedby="artistText" placeholder="Enter an artist or track" value={searchTerm} onChange={handleSearchInput} />
                </FloatingLabel>
                <Button type="submit">Search</Button>
              </InputGroup>
            </Row>
            <Form.Text id="artistText">Select Up to 5 Total Artist, Tracks, or Genres as Seeds</Form.Text>
          </Col>
          <Col xs="6">
            <InputGroupGenres handleResultClick={props.handleResultClick}>
            </InputGroupGenres>
          </Col>
        </Row>
      </Form>
      <SearchResults results={searchResults} handleResultClick={props.handleResultClick}></SearchResults>
  
      
    </Container>
  );
}
export default SearchBox;