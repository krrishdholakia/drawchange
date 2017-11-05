import * as types from '../actions/types';

const initialQuestion = {
  type: "",

  text: "",

  choices: "",

  answer: "",

};

function survey(state = initialQuestion, action) {
  const questions = [];
  questions = state;
  questions.append(action);
}

export default survey;