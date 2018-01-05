import {RECEIVE_BOOKSHELF_ERRORS, CLEAR_BOOKSHELF_ERRORS} from '../actions/bookshelf_actions';

const bookshelfErrorsReducer = function(oldState=[], action) {
  switch(action.type) {
    case RECEIVE_BOOKSHELF_ERRORS:
      return action.errors;
    case CLEAR_BOOKSHELF_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default bookshelfErrorsReducer;
