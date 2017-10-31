// NPM Imports
import React from 'react';
import PropTypes from 'prop-types';

const DisplayQuestion = ({ question, index }) => (
  <div>
    <h4>Question #{index + 1}</h4>
    <ul>
      <li>Type: {question.type}</li>
      <li>Message: {question.name}</li>
      {question.type === "multiple-choice" || question.type === "checkbox" ? <li>Choices: {question.choices}</li> : <span/>}
    </ul>
  </div>
);

DisplayQuestion.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number
};

export default DisplayQuestion;