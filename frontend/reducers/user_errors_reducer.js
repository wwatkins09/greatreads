import {RECEIVE_USER_ERRORS, CLEAR_SESSION_AND_USER_ERRORS} from '../actions/session_actions';
import {RECEIVE_USER, RECEIVE_PHOTO_ERRORS, CLEAR_PHOTO_ERRORS} from '../actions/user_actions';

const userErrorsReducer = function (oldState = [], action) {
  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case CLEAR_SESSION_AND_USER_ERRORS:
      return [];
    case RECEIVE_USER:
      return [];
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case CLEAR_PHOTO_ERRORS:
      return [];
    default:
      return oldState;
  }
};


export default userErrorsReducer;
