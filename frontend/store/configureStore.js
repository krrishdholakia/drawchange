import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk'


export function configureStore(initialState) {
    return createStore(
      rootReducer, {
        userType: "Volunteer"
      },
      applyMiddleware(
        thunkMiddleware
      )
    );
}
