import * as types from '../actions/types';

const initialState = {
  questions: [],
};

function survey(state = initialState, action) {
  switch(action.types) {
    case types.ADD_QUESTION:
      const questions = state.questions.slice();
      questions.push(action.id);
      return { questions };

    default:
      return state;
  }
}

export default survey;

