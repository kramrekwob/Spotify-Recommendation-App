import React, { useState } from 'react';

const Slider = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <div className="row">
      <label htmlFor={props.name} className="form-label col-3 border text-center mt-2">{props.label}</label>
      <input
        name={props.name}
        id={props.name}
        type="range"
        className="form-range col-6 parameter"
        min={0}
        max={1}
        step={.01}
        value={value}
        onChange={handleChange}
      />
      <span>{value}</span>
    </div>
  );
}

export default Slider;

