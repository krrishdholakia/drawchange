import * as types from '../actions/types';

const initialState = {
  text: "",
  type: "",
  choices: "",
  answer: "",
  id: "",
  byId: {}
};

function question(state = initialState, action) {
  switch(action.type) {
    case types.UPDATE_QUESTION_TYPE:
      return Object.assign({}, state, { type: action.questionType });
    case types.UPDATE_QUESTION_TEXT:
      return Object.assign({}, state, { text: action.text });
    case types.UPDATE_QUESTION_CHOICES:
      return Object.assign({}, state, { choices: action.choices });
    case types.LOAD_QUESTION:
      return Object.assign({}, state, {
        text: action.text,
        type: action.type,
        choices: action.choices,
        answer: action.answer,
        id: action.id
      });
    case types.ADD_QUESTION:
      const newQuestion = {
        text: state.text,
        type: state.type,
        choices: state.choices,
        answer: state.answer
      };
      const byId = Object.assign({}, state.byId);
      byId[action.id] = newQuestion;
      return Object.assign({}, initialState, {byId});
    default:
      return state;
  }
}

export default question;