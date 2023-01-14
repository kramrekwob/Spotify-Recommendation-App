import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

import SplitButton from 'react-bootstrap/SplitButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroupGenres from './InputGroupGenres'

import SearchResults from './SearchResults';


const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('artist'); // Default search type is artist
  const [genres, setGenres] = useState([]); // genres state variable
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
    <div className=''>
      <Form onSubmit={handleSubmit} className='col-12'>
        <Row className="align-items-center">
          <Col xs="6">
          <Row>
        <InputGroup className="">
        <InputGroup.Text column sm={2} className="form-label">Select an Artist or Track as a Seed</InputGroup.Text>
        <Form.Control column  sm={4}type="search" placeholder="Search for an artist or track" value={searchTerm} className="" onChange={handleSearchInput} />
          <Col xs="auto">
        <Form.Select variant="outline-primary" value={searchType} onChange={handleSearchType}>
        <option value="artist">Artist</option>
          <option value="track">Track</option>
        </Form.Select>
        <Button type="submit">Search</Button>
          </Col>
          </InputGroup>
        </Row>
        </Col>
      <Col xs="6">
       
      <InputGroupGenres handleResultClick={handleResultClick}>
      </InputGroupGenres>
      </Col>
    </Row>
      </Form>
      <SearchResults results={searchResults} handleResultClick={handleResultClick}></SearchResults>
      <div>
        <span>Up to 5 Seeds Can Be Selected:</span><Row>
                {selectedResults.slice(0, 5).map((result, index) => (
                    <Col><span key={index}> {result.name}</span></Col>
                ))}
                </Row>   
        <Button>Get Recommendations</Button>
      </div>
      </div>
);
        }
export default SearchBox;