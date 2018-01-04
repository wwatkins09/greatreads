export const fetchUserBookshelves = function (userId) {
  return $.ajax({
    method: 'GET',
    url: 'api/bookshelves',
    data: {user_id: userId}
  });
};

export const fetchBookshelf = function (bookshelfId) {
  return $.ajax({
    method: 'GET',
    url: `api/bookshelves/${bookshelfId}`
  });
};

export const createBookshelf = function(bookshelf) {
  return $.ajax({
    method: 'POST',
    url: 'api/bookshelves',
    data: {bookshelf}
  });
};

export const updateBookshelf = function(bookshelf) {
  return $.ajax({
    method: 'PATCH',
    url: 'api/bookshelves',
    data: {bookshelf}
  });
};

export const deleteBookshelf = function(bookshelfId) {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookshelves/${bookshelfId}`
  });
};
