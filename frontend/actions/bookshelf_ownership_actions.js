import * as APIBookshelfOwnershipUtil from '../util/bookshelf_ownership_util.js';

export const RECEIVE_BOOKSHELF_OWNERSHIP = 'RECEIVE_BOOKSHELF_OWNERSHIP';

export const createBookshelfOwnership = function(bookshelfOwnership) {
  return function(dispatch) {
    return APIBookshelfOwnershipUtil.createBookshelfOwnership(bookshelfOwnership).then((bookshelfOwnership) => {
      dispatch(receiveBookshelfOwnership(bookshelfOwnership));
    });
  };
};

export const receiveBookshelfOwnership = function(bookshelfOwnership) {
  return {
    type: RECEIVE_BOOKSHELF_OWNERSHIP,
    bookshelfOwnership
  };
};
