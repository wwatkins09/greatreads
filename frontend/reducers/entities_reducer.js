import { combineReducers } from 'redux';
import bookshelvesReducer from './bookshelves_reducer';

export default combineReducers({
  bookshelves: bookshelvesReducer
});
