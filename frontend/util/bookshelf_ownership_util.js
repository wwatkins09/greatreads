export const fetchBookshelfOwnershipsByBookshelfId = function(bookshelfId) {
  return $.ajax({
    method: 'GET',
    url: `api/bookshelf_ownerships`,
    data: {bookshelf_id: bookshelfId}
  });
};

export const fetchBookshelfOwnershipsByBookId = function(bookId) {
  return $.ajax({
    method: 'GET',
    url: 'api/bookshelf_ownerships',
    data: {book_id: bookId}
  });
};

export const createBookshelfOwnership = function(bookshelfOwnership) {
  return $.ajax({
    method: 'POST',
    url: 'api/bookshelf_ownerships',
    data: {bookshelf_ownership: bookshelfOwnership}
  });
};

export const deleteBookshelfOwnership = function(params) {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookshelves/${params.bookshelfId}/${params.bookId}`
  });
};
