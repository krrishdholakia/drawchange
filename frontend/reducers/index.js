import { combineReducers } from 'redux';
import { reducer } from 'react-redux-sweetalert';
import { routerReducer as router } from 'react-router-redux';

// import auth from './authentication';
import question from './question';
// import manager from './manager';

export default combineReducers({
//   auth,
  question,
//   manager,
//   sweetalert: reducer,
  router
});