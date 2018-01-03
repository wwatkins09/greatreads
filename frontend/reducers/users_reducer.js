import {RECEIVE_NEW_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = function (state={}, action) {
  switch(action.type) {
    case RECEIVE_NEW_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};
