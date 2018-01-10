import merge from 'lodash/merge';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_BOOKSHELF, RECEIVE_BOOKSHELVES, REMOVE_BOOKSHELF} from '../actions/bookshelf_actions';
import {RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';


const usersReducer = function(oldState={}, action) {
  const sortNumber = function (a,b) {
    return a - b;
  };

  let newState;
  switch(action.type) {

    case RECEIVE_USER:
      newState = merge({}, oldState);
      delete newState[action.user.id];
      return merge({}, newState, {[action.user.id]: action.user});

    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.id]: action.currentUser});

    case RECEIVE_BOOKSHELF:
      newState = Object.assign({}, oldState, {[action.user.id]: action.user});
      newState[action.user.id].bookshelfIds.sort(sortNumber);
      return newState;

    case RECEIVE_BOOKSHELVES:
      return merge({}, oldState, action.user);

    case REMOVE_BOOKSHELF:
      newState = merge({}, oldState);
      delete newState[action.user.id];
      return merge({}, newState, {[action.user.id]: action.user});

    case RECEIVE_REVIEW:
      return merge({}, oldState, {[action.user.id]: action.user});

    case RECEIVE_REVIEWS:
      return merge({}, oldState, action.users);

    default:
      return oldState;
  }
};

export default usersReducer;
