export const fetchReview = function(reviewId) {
  return $.ajax({
    method: 'GET',
    url: `api/reviews/${reviewId}`
  });
};

export const fetchReviewsByBookId = function(bookId) {
  return $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: {book_id: bookId}
  });
};

export const fetchReviewsByUserId = function(userId) {
  return $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: {user_id: userId}
  });
}; 
