import * as APIBookshelfUtil from '../util/api_bookshelf_util';

export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const RECEIVE_BOOKSHELF_ERRORS = 'RECEIVE_BOOKSHELF_ERRORS';
export const REMOVE_BOOKSHELF = 'REMOVE_BOOKSHELF';
export const CLEAR_BOOKSHELF_ERRORS = 'CLEAR_BOOKSHELF_ERRORS';

export const fetchUserBookshelves = function(userId) {
  return function(dispatch) {
    return APIBookshelfUtil.fetchUserBookshelves(userId).then((bookshelves) => dispatch(receiveBookshelves(bookshelves)));
  };
};

export const fetchUserBookshelvesByBookshelfId = function(bookshelfId) {
  return function(dispatch) {
    return APIBookshelfUtil.fetchUserBookshelvesByBookshelfId(bookshelfId).then((bookshelves) => dispatch(receiveBookshelves(bookshelves)));
  };
};

export const fetchBookshelf = function(bookshelfId) {
  return function(dispatch) {
    return APIBookshelfUtil.fetchBookshelf(bookshelfId).then((bookshelf) => dispatch(receiveBookshelf(bookshelf)));
  };
};

export const createBookshelf = function(bookshelf) {
  return function(dispatch) {
    return APIBookshelfUtil.createBookshelf(bookshelf).then((bookshelf) => {
      dispatch(receiveBookshelf(bookshelf));
    }, (errors) => {
      dispatch(receiveBookshelfErrors(errors.responseJSON));
    });
  };
};

export const updateBookshelf = function(bookshelf) {
  return function(dispatch) {
    return APIBookshelfUtil.updateBookshelf(bookshelf).then((bookshelf) => {
      dispatch(receiveBookshelf(bookshelf));
    }, (errors) => {
      dispatch(receiveBookshelfErrors(errors.responseJSON));
    }
    );
  };
};

export const deleteBookshelf = function(bookshelfId) {
  return function(dispatch) {
    return APIBookshelfUtil.deleteBookshelf(bookshelfId).then((bookshelf) => dispatch(removeBookshelf(bookshelf.id)));
  };
};

export const receiveBookshelves = function(payload) {
  return {
    type: RECEIVE_BOOKSHELVES,
    bookshelves: payload.bookshelves,
    user: payload.user
  };
};

export const receiveBookshelf = function(payload) {
  return {
    type: RECEIVE_BOOKSHELF,
    bookshelf: payload.bookshelf,
    user: payload.user
  };
};

export const receiveBookshelfErrors = function(errors) {
  return {
    type: RECEIVE_BOOKSHELF_ERRORS,
    errors
  };
};

export const removeBookshelf = function(bookshelfId) {
  return {
    type: REMOVE_BOOKSHELF,
    bookshelfId
  };
};

export const clearBookshelfErrors = function() {
  return {
    type: CLEAR_BOOKSHELF_ERRORS
  };
};
