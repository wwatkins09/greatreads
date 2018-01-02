import * as ApiSessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

export const fetchCurrentUser = function(userId) {
  return function(dispatch) {
    return ApiSessionUtil.fetchCurrentUser(userId).then((user) => receiveCurrentUser(user));
  };
};

export const receiveCurrentUser = function(user) {
  return {
    type: 'RECEIVE_CURRENT_USER',
    user
  };
};
