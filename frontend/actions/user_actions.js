import * as APIUserUtil from '../util/api_user_util';
import {receiveCurrentUser, receiveUserErrors} from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = function(userId) {
  return function(dispatch) {
    return APIUserUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user)));
  };
};

export const createUser = function(user) {
  return function(dispatch) {
    return APIUserUtil.createUser(user).then((user) => {
      dispatch(receiveCurrentUser(user));
    }, (errors) => {
      dispatch(receiveUserErrors(errors.responseJSON));
    });
  };
};

export const receiveUser = function(user) {
  return {
    type: RECEIVE_USER,
    user
  };
};

// in receiveUser, change user input to 'payload', then in return object,
// user: payload.user, bookshelves: payload.bookshelves
