import {combineReducers} from 'redux';
import userErrorsReducer from './user_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import bookshelfErrorsReducer from './bookshelf_errors_reducer';
import bookshelfOwnershipErrorsReducer from './bookshelf_ownership_errors_reducer';

export default combineReducers({
  user: userErrorsReducer,
  session: sessionErrorsReducer,
  bookshelf: bookshelfErrorsReducer,
  bookshelfOwnership: bookshelfOwnershipErrorsReducer
});
