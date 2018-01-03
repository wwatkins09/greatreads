import merge from 'lodash/merge';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';


const usersReducer = function(oldState={}, action) {
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user});
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.id]: action.currentUser});
    default:
      return oldState;
  }
};

export default usersReducer;
