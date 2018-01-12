import merge from 'lodash/merge';
import {RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';
import {RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions';

const booksReducer = function( oldState = {}, action ) {
  let newState;
  switch(action.type) {
    case RECEIVE_BOOKS:
      return merge({}, oldState, action.books);
    case RECEIVE_BOOK:
      return merge({}, oldState, {[action.book.id]: action.book});
    case RECEIVE_REVIEW:
      return merge({}, oldState, {[action.book.id]: action.book});
    case REMOVE_REVIEW:
      newState = merge({}, oldState);
      newState[action.book.id].reviewIds = newState[action.book.id].reviewIds.filter(el => el !== action.review.id);
      return newState;
    default:
      return oldState;
  }
};

export default booksReducer;
