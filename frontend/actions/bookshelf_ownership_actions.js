import * as APIBookshelfOwnershipUtil from '../util/bookshelf_ownership_util.js';

export const RECEIVE_BOOKSHELF_OWNERSHIP = 'RECEIVE_BOOKSHELF_OWNERSHIP';
export const RECEIVE_BOOKSHELF_OWNERSHIPS = 'RECEIVE_BOOKSHELF_OWNERSHIPS';

export const createBookshelfOwnership = function(bookshelfOwnership) {
  return function(dispatch) {
    return APIBookshelfOwnershipUtil.createBookshelfOwnership(bookshelfOwnership).then((bookshelfOwnership) => {
      dispatch(receiveBookshelfOwnership(bookshelfOwnership));
    });
  };
};

export const fetchBookshelfOwnershipsByBookshelfId = function(bookshelfId) {
  return function(dispatch) {
    return APIBookshelfOwnershipUtil.fetchBookshelfOwnershipsByBookshelfId(bookshelfId).then((bookshelfOwnerships) => {
      dispatch(receiveBookshelfOwnerships(bookshelfOwnerships));
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
