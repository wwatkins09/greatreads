import merge from 'lodash/merge';
import {RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS, RECEIVE_BOOKSHELF_OWNERSHIP} from '../actions/bookshelf_ownership_actions';

const bookshelfOwnershipErrorsReducer = function(oldState=[], action) {
  switch(action.type) {
    case RECEIVE_BOOKSHELF_OWNERSHIP_ERRORS:
      return action.errors;
    case RECEIVE_BOOKSHELF_OWNERSHIP:
      return [];
    default:
      return oldState;
  }


};

export default bookshelfOwnershipErrorsReducer;
