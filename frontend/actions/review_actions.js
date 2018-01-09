import * as APIReviewUtil from '../util/api_review_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const fetchReview = function(reviewId) {
  return function(dispatch) {
    return APIReviewUtil.fetchReview(reviewId).then((review) => dispatch(receiveReview(review)));
  };
};

export const fetchReviewsByUserId = function(userId) {
  return function(dispatch) {
    return APIReviewUtil.fetchReviewsByUserId(userId).then((reviews) => dispatch(receiveReviews(reviews)));
  };
};

export const fetchReviewsByBookId = function(bookId) {
  return function(dispatch) {
    return APIReviewUtil.fetchReviewsByBookId(bookId).then((reviews) => dispatch(receiveReviews(reviews)));
  };
};

export const receiveReview = function(review) {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const receiveReviews = function(reviews) {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};
