import React, { useState } from 'react';
import axios from 'axios';
import {Button, Form, InputGroup, Row, Col, Dropdown, FloatingLabel, DropdownButton, Container} from 'react-bootstrap';
import InputGroupGenres from './InputGroupGenres'
import SearchResults from './SearchResults';


const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('artist'); // Default search type is artist
  const [selectedResults, setSelectedResults] = useState([]);
  

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
  const handleResultClick = (result) => {
    console.log(result)
    if (result.name == '') return;
    if (selectedResults.length === 5) {
      return;
    }
    if (result.type === "artist" || result.type === "track") {
      if (selectedResults.some(res => res.id === result.id)) {
        return;
      }
      setSelectedResults([...selectedResults, result]);
    }
    if (result.type === "genre") {
      setSelectedResults([...selectedResults, result]);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className='container mx-auto'>
        <Row className="align-items-center">
          <Col xs="6">
            <Row>
              <InputGroup>
                <DropdownButton title="Artist or Track" value={searchType} onChange={handleSearchType}>
                  <Dropdown.Item value="artist">Artist</Dropdown.Item>
                  <Dropdown.Item value="track">Track</Dropdown.Item>
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
            <InputGroupGenres handleResultClick={handleResultClick}>
            </InputGroupGenres>
          </Col>
        </Row>
      </Form>
      <SearchResults results={searchResults} handleResultClick={handleResultClick}></SearchResults>
      <div className="mt-5">
        <span>Up to 5 Seeds Can Be Selected:</span><Row>
          {selectedResults.slice(0, 5).map((result, index) => (
            <Col><span key={index}> {result.name}</span></Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
export default SearchBox;