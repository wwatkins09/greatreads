import * as APIBookshelfOwnershipUtil from '../util/bookshelf_ownership_util.js';

export const RECEIVE_BOOKSHELF_OWNERSHIP = 'RECEIVE_BOOKSHELF_OWNERSHIP';
export const RECEIVE_BOOKSHELF_OWNERSHIPS = 'RECEIVE_BOOKSHELF_OWNERSHIPS';
export const RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS = 'RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS';

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
