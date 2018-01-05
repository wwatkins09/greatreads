import { combineReducers } from 'redux';
import bookshelvesReducer from './bookshelves_reducer';
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';

export default combineReducers({
  users: usersReducer,
  bookshelves: bookshelvesReducer,
  books: booksReducer
});
