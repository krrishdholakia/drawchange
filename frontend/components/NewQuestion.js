// NPM Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Button,  FormGroup, Panel } from 'react-bootstrap';

// Local Imports
import Input from './Input';
import DropDown from './DropDown';

// New Question  Component
const NewQuestion = ({ type, text, choices, updateText, updateChoices, updateType, addQuestion }) => (
  <Panel header={<h4>New Question</h4>} bsStyle="success">
    <FormGroup>
      <Input
        value={text}
        question={"Question to add?"}
        handleChange={updateText}/>
    </FormGroup>
    <FormGroup>
      <DropDown
        value={type}
        choices={['input', 'scale', 'multiple-choice', 'checkbox', 'date']}
        question={"Type of Question?"}
        handleChange={updateType}/>
    </FormGroup>
    {type === "multiple-choice"
      ? <FormGroup>
          <Input
            value={choices}
            question={"Choices? (seperate w/ commas)"}
            handleChange={updateChoices}/>
        </FormGroup>
      : <div/>}
    {type === "checkbox"
      ? <FormGroup>
          <Input
            value={choices}
            question={"Choices? (seperate w/ commas)"}
            handleChange={updateChoices}/>
        </FormGroup>
      : <div/>}
    <Button onClick={addQuestion}> Add New Question </Button>
  </Panel>
);


NewQuestion.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  choices: PropTypes.string,
  updateType: PropTypes.func,
  updateText: PropTypes.func,
  updateChoices: PropTypes.func,
  addQuestion: PropTypes.func,
};


export default NewQuestion;

