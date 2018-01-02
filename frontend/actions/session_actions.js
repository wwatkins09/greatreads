import * as ApiSessionUtil from '../util/api_session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

export const signIn = function(credentials) {
  return function(dispatch) {
    return ApiSessionUtil.createSession(credentials).then((user) => receiveCurrentUser(user));
  };
};

export const receiveCurrentUser = function(user) {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const removeCurrentUser = function() {
  return {
    type: LOGOUT
  };
};
