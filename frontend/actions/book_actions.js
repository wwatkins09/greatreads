import * as APIBookUtil from '../util/api_book_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';

export const fetchBooksByBookshelfId = function(bookshelfId) {
  return function(dispatch) {
    return APIBookUtil.fetchBooksByBookshelfId(bookshelfId).then((books) => dispatch(receiveBooks(books)));
  };
};

export const fetchBook = function(bookId) {
  return function(dispatch) {
    return APIBookUtil.fetchBook(bookId).then((book) => dispatch(receiveBook(book)));
  };
};

export const receiveBooks = function(books) {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

export const receiveBook = function(book) {
  return {
    type: RECEIVE_BOOK,
    book
  };
};
