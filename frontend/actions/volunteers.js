import * as types from './types.js';
import axios from 'axios';
import { push } from 'react-router-redux';


export function updateCurrentVolunteer(id) {
  return (dispatch, getState) => {
    dispatch(push(`/volunteers/${id}`));
    dispatch(currentVolunteer(id));
  };
}

function currentVolunteer(id) {
  return {
    type: types.UPDATE_CURRENT_VOLUNTEER,
    id
  };
}

export function updateVolunteerStatus(role) {
  return { type: types.VOLUNTEER_STATUS, role};
}


export function loadAllVolunteers(id) {
  return dispatch => {
    axios.get('/api/users?type=volunteer')
      .then(({ data }) => {
        dispatch(allVolunteers(data.users));
        if (id) dispatch(currentVolunteer(id));
      });
  };
}

function allVolunteers(all) {
  return {
    type: types.LOAD_ALL_VOLUNTEERS,
    all
  };
}


export function loadNewVolunteers() {
  return dispatch => {
    axios.get('/api/users?type=new')
      .then(({ data }) => {
        dispatch(newVolunteers(data.users));
      });
  };
}
export function loadPendingVolunteers() {
  return dispatch => {
    axios.get('/api/users?type=pending')
      .then(({ data }) => {
        dispatch(pendingVolunteers(data.users));
      });
  };
}

// export function onLoad() {
//   return dispatch => {
//     axios.get('/api/users?type=pending')
//       .then(({ data }) => {
//         dispatch(loadPendingVolunteers(data.users));
//       });
//     axios.get('/api/users?type=new')
//       .then(({ data }) => {
//         dispatch(loadNewVolunteers(data.users));
//       });
//     axios.get('/api/events?type=new')
//       .then(({ data }) => {
//         dispatch(loadNewEvents(data.events));
//       });
//   };
// }

function pendingVolunteers(pending) {
  return {
    type: types.LOAD_PENDING_VOLUNTEERS,
    pending
  };
}

function newVolunteers(newest) {
  return {
    type: types.LOAD_NEWEST_VOLUNTEERS,
    newest
  };
}

