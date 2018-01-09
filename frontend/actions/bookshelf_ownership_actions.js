import * as APIBookshelfOwnershipUtil from '../util/api_bookshelf_ownership_util.js';

export const RECEIVE_BOOKSHELF_OWNERSHIP = 'RECEIVE_BOOKSHELF_OWNERSHIP';
export const RECEIVE_BOOKSHELF_OWNERSHIPS = 'RECEIVE_BOOKSHELF_OWNERSHIPS';
export const RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS = 'RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS';
export const REMOVE_BOOKSHELF_OWNERSHIP = 'REMOVE_BOOKSHELF_OWNERSHIP';
export const CLEAR_BOOKSHELF_OWNERSHIP_ERRORS = 'CLEAR_BOOKSHELF_OWNERSHIP_ERRORS';

export const createBookshelfOwnership = function(bookshelfOwnership) {
  return function(dispatch) {
    return APIBookshelfOwnershipUtil.createBookshelfOwnership(bookshelfOwnership).then((bookshelfOwnership) => {
      dispatch(receiveBookshelfOwnership(bookshelfOwnership));
    }, (errors) => {
      dispatch(receiveBookshelfOwnershipErrors(errors.responseJSON));
    }
  );
  };
};

export const fetchBookshelfOwnershipsByBookId = function(bookId) {
  return function(dispatch) {
    return APIBookshelfOwnershipUtil.fetchBookshelfOwnershipsByBookId(bookId).then((bookshelfOwnerships) => {
      dispatch(receiveBookshelfOwnerships(bookshelfOwnerships));
    });
  };
};

export const fetchBookshelfOwnershipsByBookshelfId = function(bookshelfId) {
  return function(dispatch) {
    return APIBookshelfOwnershipUtil.fetchBookshelfOwnershipsByBookshelfId(bookshelfId).then((bookshelfOwnerships) => {
      dispatch(receiveBookshelfOwnerships(bookshelfOwnerships));
    }, (errors) => {
      dispatch(receiveBookshelfOwnershipErrors(errors.responseJSON));
    }
  );
  };
};

export const deleteBookshelfOwnership = function(args) {
  return function(dispatch) {
    return APIBookshelfOwnershipUtil.deleteBookshelfOwnership(args).then((bookshelfOwnership) => {
      dispatch(removeBookshelfOwnership(bookshelfOwnership));
    });
  };
};

export const receiveBookshelfOwnership = function(bookshelfOwnership) {
  return {
    type: RECEIVE_BOOKSHELF_OWNERSHIP,
    bookshelfOwnership
  };
};

export const receiveBookshelfOwnerships = function(bookshelfOwnerships) {
  return {
    type: RECEIVE_BOOKSHELF_OWNERSHIPS,
    bookshelfOwnerships
  };
};

export const receiveBookshelfOwnershipErrors = function(errors) {
  return {
    type: RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS,
    errors
  };
};

export const clearBookshelfOwnershipErrors = function() {
  return {
    type: CLEAR_BOOKSHELF_OWNERSHIP_ERRORS
  };
};

export const removeBookshelfOwnership = function(bookshelfOwnership) {
  return {
    type: REMOVE_BOOKSHELF_OWNERSHIP,
    bookshelfOwnership: bookshelfOwnership.bookshelfOwnership
  };
};
