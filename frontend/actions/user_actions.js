import * as ApiUserUtil from '../util/api_user_util';

export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';

export const createUser = function(user) {
  return function(dispatch) {
    return ApiUserUtil.createUser(user).then((user) => dispatch(receiveNewUser(user)));
  };
};

export const receiveNewUser = function(user) {

};
