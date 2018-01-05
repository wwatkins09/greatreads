import {RECEIVE_USER_ERRORS, CLEAR_SESSION_AND_USER_ERRORS} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const userErrorsReducer = function (oldState = [], action) {
  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case CLEAR_SESSION_AND_USER_ERRORS:
      return [];
    case RECEIVE_USER:
      return [];
    default:
      return oldState;
  }
};


export default userErrorsReducer;
