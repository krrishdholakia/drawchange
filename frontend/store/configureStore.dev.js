import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk'
import DevTools from '../containers/DevTools'


export function configureStore(initialState) {
    return createStore(
      rootReducer, {
        userType: "Volunteer"
      },
      compose(
            DevTools.instrument()
      ),
      applyMiddleware(
        thunkMiddleware
      )
  );
}
