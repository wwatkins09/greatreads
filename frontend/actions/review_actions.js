import * as APIReviewUtil from '../util/api_review_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

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

export const createReview = function(review) {
  return function(dispatch) {
    return APIReviewUtil.createReview(review).then((review) => dispatch(receiveReview(review)),
    (errors) => {
      return dispatch(receiveReviewErrors(errors.responseJSON));
    });
  };
};

export const receiveReview = function(payload) {
  return {
    type: RECEIVE_REVIEW,
    review: payload.review,
    book: payload.book
  };
};

export const receiveReviews = function(payload) {
  return {
    type: RECEIVE_REVIEWS,
    reviews: payload.reviews,
    book: payload.book
  };
};

export const receiveReviewErrors = function(errors) {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const clearReviewErrors = function() {
  return {
    type: CLEAR_REVIEW_ERRORS
  };
};
