export const fetchBooksByBookshelfId = function(bookshelfId) {
  return $.ajax({
    method: 'GET',
    url: 'api/books',
    data: {bookshelf_id: bookshelfId}
  });
};

export const fetchAllBooks = function() {
  return $.ajax({
    method: 'GET',
    url: 'api/books'
  });
};

export const fetchBook = function(bookId) {
  return $.ajax({
    method: 'GET',
    url: `api/books/${bookId}`
  });
};
