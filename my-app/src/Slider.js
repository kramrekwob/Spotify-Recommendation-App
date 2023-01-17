import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Slider = (props) => {

  const handleChange = (event) => {
    props.handleSliderChange(props.name, event.target.value);
  }
  
  return (
    <Col className="col-sm-12 col-md-6 col-lg-4">
      <Form.Label as={Col} htmlFor={props.name} className="border text-center text-bold mt-2">{props.label}</Form.Label>
      <Form.Range as={Col}
        name={props.name}
        id={props.name}
        type="range"
        className="form-range col-6 parameter"
        min={0}
        max={1}
        step={.01}
        value={props.value}
        onChange={handleChange}
      />
      <Col>{props.value}</Col>
    </Col>
  );
}

export default Slider;

