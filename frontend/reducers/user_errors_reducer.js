import {RECEIVE_USER_ERRORS} from '../actions/session_actions';

const userErrorsReducer = function (oldState = [], action) {
  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};


export default userErrorsReducer;
