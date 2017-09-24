// Action Creators
import fetch from 'isomorphic-fetch'

// import * as types from './types';
export function changeUserType() {
  return {
    type: "CHANGE_USER_TYPE"
  }
}

export function registerUser(username, password) {
  return {
    type: "REGISTER_USER",
    username,
    password
  }
}

export function requestRegistration(username) {
  return {
    type: "REQUEST_REGISTRATION",
  }
}

export function registrationSuccess(username) {
  return {
    type: "REGISTRATION_SUCCESS",
  }
}

export function loginSUccess() {
  return {
    type: "LOGIN_SUCCESS",
  }
}

export function login(username, password) {

  return function (dispatch) {
    dispatch(requestLogin(username));
    return fetch('')
      .then(
        response => response.json(),
        error => {}
      )
      .then(
        json => dispatch(loginSuccess(username, json))
      );
  }
}

export function register(username, password) {

  return function (dispatch) {
    dispatch(requestRegistration(username));
    return fetch('')
      .then(
        response => response.json(),
        error => {}
      )
      .then(
        json => dispatch(loginSuccess(username, json))
      );
  }
}
