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

export const createReview = function(review) {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: {review: {
      user_id: review.userId,
      book_id: review.bookId,
      score: review.score,
      body: review.body
    }}
  });
};

export const updateReview = function(review) {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: {review: {
      id: review.id,
      user_id: review.userId,
      book_id: review.bookId,
      score: review.score,
      body: review.body
    }}
  });
};



export const deleteReview = function(reviewId) {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  });
};
