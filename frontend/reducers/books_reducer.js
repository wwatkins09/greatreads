import merge from 'lodash/merge';
import {RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';

const booksReducer = function( oldState = {}, action ) {
  switch(action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      return merge({}, oldState, {[action.book.id]: action.book});
    default:
      return oldState;
  }
};

export default booksReducer;
