import { combineReducers } from 'redux';
import bookshelvesReducer from './bookshelves_reducer';
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import bookshelfOwnershipsReducer from './bookshelf_ownerships_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
  users: usersReducer,
  bookshelves: bookshelvesReducer,
  books: booksReducer,
  bookshelfOwnerships: bookshelfOwnershipsReducer,
  reviews: reviewsReducer
});
