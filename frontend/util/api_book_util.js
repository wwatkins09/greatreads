export const fetchBooksByBookshelfId = function(bookshelfId) {
  return $.ajax({
    method: 'GET',
    url: '/api/books',
    data: {bookshelfId}
  });
};

export const fetchBook = function(bookId) {
  return $.ajax({
    method: 'GET',
    url: `/api/books/${bookId}`
  });
};
