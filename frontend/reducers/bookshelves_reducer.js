import merge from 'lodash/merge';
import {RECEIVE_BOOKSHELVES, RECEIVE_BOOKSHELF, REMOVE_BOOKSHELF} from '../actions/bookshelf_actions';

const bookshelvesReducer = function (oldState=[], action) {
  switch(action.type) {

    case RECEIVE_BOOKSHELVES:
      const bookshelfObject = {};
      action.bookshelves.forEach((bookshelf) => {
         bookshelfObject[bookshelf.id] = bookshelf;
      });
      return bookshelfObject;
    case RECEIVE_BOOKSHELF:
      return merge({}, oldState, {[action.bookshelf.id]: action.bookshelf});
    default:
      return oldState;
  }
};

export default bookshelvesReducer;
