import * as APIUserUtil from '../util/api_user_util';
import {receiveCurrentUser, receiveUserErrors} from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

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

export const updateUserPhoto = function(formData) {
  return function(dispatch) {
    return APIUserUtil.updateUserPhoto(formData).then((user) => {
      dispatch(receiveUser(user));
    }, (errors) => {
      dispatch(receivePhotoErrors(errors.responseJSON))
    });
  }
}

export const receiveUser = function(payload) {
  return {
    type: RECEIVE_USER,
    user: payload.user,
    bookshelves: payload.bookshelves
  };
};

export const receivePhotoErrors = function(errors) {
  return {
    type: RECEIVE_PHOTO_ERRORS,
    errors
  }
}
