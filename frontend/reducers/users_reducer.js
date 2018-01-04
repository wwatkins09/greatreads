import merge from 'lodash/merge';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_BOOKSHELF} from '../actions/bookshelf_actions';


const usersReducer = function(oldState={}, action) {
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user});
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_BOOKSHELF:
      let newState = Object.assign({}, oldState, action.user);
      if (!newState[action.bookshelf.userId].bookshelfIds.includes(action.bookshelf.id)) {
          newState[action.bookshelf.userId].bookshelfIds.push(action.bookshelf.id);
      }
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;
