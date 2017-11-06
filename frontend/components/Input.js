// NPM Imports
import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormControl } from 'react-bootstrap';

// React Input Text Component
const Input = ({ value, handleChange, question }) => (
  <div>
    <ControlLabel>{question}</ControlLabel>
    <FormControl
      type="text"
      value={value}
      placeholder="Enter text"
      onChange={(e) => handleChange(e.target.value) }
    />
  </div>
);


Input.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  question: PropTypes.string
};


export default Input;