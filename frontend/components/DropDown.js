// NPM Imports
import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormControl, Clearfix } from 'react-bootstrap';

// Dropdown  Component
class DropDown extends React.Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e) {
    if (e.target.value !== "----") {
      this.props.handleChange(e.target.value);
    }
  }

  render() {
    return (
      <div >
        <ControlLabel>{this.props.question}</ControlLabel>

        <FormControl value={this.props.value} onChange={this.updateValue} componentClass="select" placeholder="select" >
        <option  key={"blank"} value={null}>----</option>
          {
            this.props.choices.map((choice, index) => {
              return (
                <option  key={index} value={choice._id ? choice._id : choice}>
                  {choice.name ? choice.name : choice}
                </option>);
            })
          }
        </FormControl>
        <Clearfix />
      </div>
    );
  }
}

DropDown.propTypes = {
  value: PropTypes.string,
  choices: PropTypes.array,
  handleChange: PropTypes.func,
  question: PropTypes.string
};


export default DropDown;

