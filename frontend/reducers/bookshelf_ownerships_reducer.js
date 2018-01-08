import merge from 'lodash/merge';
import {RECEIVE_BOOKSHELF_OWNERSHIP, RECEIVE_BOOKSHELF_OWNERSHIPS} from '../actions/bookshelf_ownership_actions';

const bookshelfOwnershipsReducer = function(oldState={}, action) {
  switch(action.type) {
    case RECEIVE_BOOKSHELF_OWNERSHIP:
      return merge({}, oldState, {[action.bookshelfOwnership.id]: action.bookshelfOwnership});
    case RECEIVE_BOOKSHELF_OWNERSHIPS:
      return merge({}, oldState, action.bookshelfOwnerships);
    default:
      return oldState;
  }


};

export default bookshelfOwnershipsReducer;
