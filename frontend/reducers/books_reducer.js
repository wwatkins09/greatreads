import merge from 'lodash/merge';
import {RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';

const booksReducer = function( oldState = {}, action ) {
  switch(action.type) {
    default:
      return oldState;
  }
};

export default booksReducer;
