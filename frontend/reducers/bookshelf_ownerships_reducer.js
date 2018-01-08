import merge from 'lodash/merge';
import {RECEIVE_BOOKSHELF_OWNERSHIP, RECEIVE_BOOKSHELF_OWNERSHIPS, REMOVE_BOOKSHELF_OWNERSHIP} from '../actions/bookshelf_ownership_actions';

const bookshelfOwnershipsReducer = function(oldState={}, action) {
  switch(action.type) {
    case RECEIVE_BOOKSHELF_OWNERSHIP:
      return merge({}, oldState, {[action.bookshelfOwnership.id]: action.bookshelfOwnership});
    case RECEIVE_BOOKSHELF_OWNERSHIPS:
      return merge({}, oldState, action.bookshelfOwnerships);
    case REMOVE_BOOKSHELF_OWNERSHIP:
      let newState = merge({}, oldState);
      delete newState[action.bookshelfOwnershipId];
      return newState;
    default:
      return oldState;
  }


};

export default bookshelfOwnershipsReducer;
