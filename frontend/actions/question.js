import axios from 'axios';
import { generate } from 'shortid';

import * as types from './types.js';

// export function loadSurvey(surveyId) {
//   return function(dispatch, getState) { // using Thunks
//     const { user } = getState().auth;
//     axios.get(`/api/surveys/${surveyId}`) // helper method that makes axios call to server
//           .then(({ data }) => {
//             dispatch(generator.surveyLoaded(data.survey.questions, user, surveyId));
//           })
//           .catch(console.log);
//   };
// }

export function onUpdateQuestionTypeChange(questionType) {
  return { type: types.UPDATE_QUESTION_TYPE, questionType };
}

export function onUpdateQuestionTextChange(text) {
  return { type: types.UPDATE_QUESTION_TEXT, text };
}

export function onUpdateQuestionChoicesChange(choices) {
  return { type: types.UPDATE_QUESTION_CHOICES, choices };
}

export function onUpdateQuestionAnswerChange(choices) {
  return { type: types.UPDATE_QUESTION_ANSWER, choices };
}

export function onAddQuestion() {
  const id = generate();
  return { type: types.ADD_QUESTION, id };
}
