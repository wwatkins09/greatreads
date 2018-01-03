import { combineReducers } from 'redux';
import bookshelvesReducer from './bookshelves_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
  users: usersReducer,
  bookshelves: bookshelvesReducer
});
