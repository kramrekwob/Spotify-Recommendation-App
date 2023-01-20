import React from 'react';
import { Form, Col } from 'react-bootstrap';

const Slider = (props) => {

  const handleChange = (event) => {
    props.handleSliderChange(props.name, event.target.value);
  }
  
  return (
    <Col className="col-6 col-md-4">
      <Form.Label as={Col} htmlFor={props.name} className="border text-center text-bold mt-2 bg-dark text-light">{props.label}</Form.Label>
      <Form.Range as={Col}
        name={props.name}
        id={props.name}
        type="range"
        className="form-range col-6 parameter"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={handleChange}
      />
      <Col>{props.value}</Col>
    </Col>
  );
}

export default Slider;

