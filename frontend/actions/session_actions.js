import * as ApiSessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';


export const receiveCurrentUser = function(user) {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const logout = function() {
  return {
    type: LOGOUT
  };
};
