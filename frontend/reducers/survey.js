import * as types from '../actions/types';

const initialQuestionColl = [];

function survey(state = initialQuestionColl, action) {
  switch(action.types) {
    case types.ADD_QUESTION:
      const questions = state.questions.slice();
      questions.push({
        type: action.type,
        text: action.text,
        choices: action.choices,
        answer: null
      });
      return questions;

    default:
      return state;
  }
}

export default survey;

