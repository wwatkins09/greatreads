import merge from 'lodash/merge';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_BOOKSHELF, RECEIVE_BOOKSHELVES, REMOVE_BOOKSHELF} from '../actions/bookshelf_actions';


const usersReducer = function(oldState={}, action) {
  let newState;
  switch(action.type) {

    case RECEIVE_USER:
      newState = merge({}, oldState);
      delete newState[action.user.id];
      return merge({}, newState, {[action.user.id]: action.user});

    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.id]: action.currentUser});

    case RECEIVE_BOOKSHELF:
      newState = merge({}, oldState, action.user);
      if (newState[action.bookshelf] && !newState[action.bookshelf.userId].bookshelfIds.includes(action.bookshelf.id)) {
          newState[action.bookshelf.userId].bookshelfIds.push(action.bookshelf.id);
      }
      return newState;

    case RECEIVE_BOOKSHELVES:
      return merge({}, oldState, action.user);

    case REMOVE_BOOKSHELF:
      newState = merge({}, oldState);
      delete newState[action.user.id];
      return merge({}, newState, {[action.user.id]: action.user});

    default:
      return oldState;
  }
};

export default usersReducer;
