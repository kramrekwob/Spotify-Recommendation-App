import React, { useState } from 'react';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const genres = ['acoustic', 'afrobeat',       'alt-rock',
'alternative',       'ambient',        'anime',
'black-metal',       'bluegrass',      'blues',
'bossanova',         'brazil',         'breakbeat',
'british',           'cantopop',       'chicago-house',
'children',          'chill',          'classical',
'club',              'comedy',         'country',
'dance',             'dancehall',      'death-metal',
'deep-house',        'detroit-techno', 'disco',
'disney',            'drum-and-bass',  'dub',
'dubstep',           'edm',            'electro',
'electronic',        'emo',            'folk',
'forro',             'french',         'funk',
'garage',            'german',         'gospel',
'goth',              'grindcore',      'groove',
'grunge',            'guitar',         'happy',
'hard-rock',         'hardcore',       'hardstyle',
'heavy-metal',       'hip-hop',        'holidays',
'honky-tonk',        'house',          'idm',
'indian',            'indie',          'indie-pop',
'industrial',        'iranian',        'j-dance',
'j-idol',            'j-pop',          'j-rock',
'jazz',              'k-pop',          'kids',
'latin',             'latino',         'malay',
'mandopop',          'metal',          'metal-misc',
'metalcore',         'minimal-techno', 'movies',
'mpb',               'new-age',        'new-release',
'opera',             'pagode',         'party',
'philippines-opm',   'piano',          'pop',
'pop-film',          'post-dubstep',   'power-pop',
'progressive-house', 'psych-rock',     'punk',
'punk-rock',         'r-n-b',          'rainy-day',
'reggae',            'reggaeton',      'road-trip',
"rock-n-roll",
"rockabilly",
"romance",
"sad",
"salsa",
"samba",
"sertanejo",
"show-tunes",
"singer-songwriter",
"ska",
"sleep",
"songwriter",
"soul",
"soundtracks",
"spanish",
"study",
"summer",
"swedish",
"synth-pop",
"tango",
"techno", "trance", "trip-hop",
"turkish",
"work-out",
"world-music"]


function InputGroupGenres({ handleResultClick }) {
    const [selectedGenre, setSelectedGenre] = useState('');

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let info = {
            type: 'genre',
            name: selectedGenre,
        }
        handleResultClick(info);
        setSelectedGenre('');
    }

    return (
        <Form>
        <Row>
    
   
        <Col sm={6}>
            <Row><InputGroup.Text> OR:</InputGroup.Text><Form.Select aria-label="Default select example" value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Select a genre</option>
        {genres.map(genre => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))} </Form.Select>
                    </Row>
                    </Col>
      
      <Col className="d-flex"><Button onClick={handleSubmit}>Add Seed</Button></Col>
     </Row>
      </Form>
     
    //     <Form >
    //     <InputGroup>
    //     <Form.Select as="select" value={selectedGenre} onChange={handleGenreChange}>
    //                 
                 
    //             </Form.Select>
    //             <InputGroup.Append>
    //                 <Button variant="outline-secondary" onClick={handleSubmit}>Submit</Button>
    //             </InputGroup.Append>
    //         </InputGroup>
    //     </ Form>
    // );
    )
    };

export default InputGroupGenres;
