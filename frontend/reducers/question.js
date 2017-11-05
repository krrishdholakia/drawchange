import * as types from '../actions/types';

const initialQuestion = {
  type: "",

  text: "",

  choices: "",

  answer: "",

};

function question(state = initialQuestion, action) {
  switch(action.type) {
    case types.UPDATE_QUESTION_TYPE:
      return Object.assign({}, state, {
        type: action.questionType
      });
    case types.UPDATE_QUESTION_TEXT:
      return Object.assign({}, state, {
        text: action.text,
      });
    case types.UPDATE_QUESTION_CHOICES:
      return Object.assign({}, state, {
        choices: action.choices
      });
    // case types.UPDATE_ADD_QUESTION:
    //   return Object.assign({}, state, {
    //     question: action.question
    //   });
    default:
      return state;
  }
}

export default question;