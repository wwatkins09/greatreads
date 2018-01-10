import merge from 'lodash/merge';
import {RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW} from '../actions/review_actions';

const reviewsReducer = function( oldState = {}, action ) {
  let newState;
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, oldState, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, oldState, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      newState = merge({}, oldState);
      delete newState[action.review.id];
      return newState;
    default:
      return oldState;
  }
};

export default reviewsReducer;
