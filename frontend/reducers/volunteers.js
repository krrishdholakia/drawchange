import * as types from '../actions/types';

const initialState = {
  pending: [],
  newest: [],
};

export default function volunteers(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_PENDING_VOLUNTEERS:
      return Object.assign({}, state, {pending: action.pending});
    case types.LOAD_NEWEST_VOLUNTEERS:
      return Object.assign({}, state, { newest: action.newest });
    default:
      return state;
  }
}