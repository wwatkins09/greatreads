import merge from 'lodash/merge';
import {RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';

const reviewsReducer = function( oldState = {}, action ) {
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, oldState, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, oldState, {[action.review.id]: action.review});
    default:
      return oldState;
  }
};

export default reviewsReducer;
