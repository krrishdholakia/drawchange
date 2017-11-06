import { combineReducers } from 'redux';
import { reducer } from 'react-redux-sweetalert';
import { routerReducer as router } from 'react-router-redux';

// import auth from './authentication';
import question from './question';
import survey from './survey';
// import manager from './manager';

export default combineReducers({
//   auth,
  question,
  survey,
//   manager,
//   sweetalert: reducer,
  router
});