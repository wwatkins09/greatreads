import  {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const sessionErrorsReducer = function(oldState=[], action) {
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
