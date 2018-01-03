import * as ApiSessionUtil from '../util/api_session_util';
import {fetchUser} from './user_actions.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = function(payload) {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: payload.user
  };
};

export const removeCurrentUser = function() {
  return {
    type: LOGOUT
  };
};

export const receiveUserErrors = function(errors) {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const receiveSessionErrors = function(errors) {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};



export const signIn = function(credentials) {
  return function(dispatch) {
    return ApiSessionUtil.createSession(credentials).then((user) => {
      dispatch(receiveCurrentUser(user));
    }, (errors) => {
      dispatch(receiveSessionErrors(errors.responseJSON));
    });
  };
};

export const signOut = function() {
  return function(dispatch) {
    return ApiSessionUtil.destroySession().then(() => dispatch(removeCurrentUser()));
  };
};
