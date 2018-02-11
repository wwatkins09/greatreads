import merge from 'lodash/merge';
import {RECEIVE_BOOKSHELVES, RECEIVE_BOOKSHELF, REMOVE_BOOKSHELF} from '../actions/bookshelf_actions';
import {REMOVE_BOOKSHELF_OWNERSHIP} from '../actions/bookshelf_ownership_actions';

const bookshelvesReducer = function (oldState=[], action) {
  let newState;
  switch(action.type) {

    case RECEIVE_BOOKSHELVES:
      return Object.assign({}, oldState, action.bookshelves);
    case RECEIVE_BOOKSHELF:
      return Object.assign({}, oldState, {[action.bookshelf.id]: action.bookshelf});
    case REMOVE_BOOKSHELF:
      newState = merge({}, oldState);
      delete newState[action.bookshelf.id];
      return newState;
    case REMOVE_BOOKSHELF_OWNERSHIP:
      newState = merge({}, oldState);
      newState[action.bookshelfOwnership.bookshelfId].bookIds = newState[action.bookshelfOwnership.bookshelfId].bookIds.filter(el => el !== action.bookshelfOwnership.bookId);
      return newState;
    default:
      return oldState;
  }
};

export default bookshelvesReducer;
