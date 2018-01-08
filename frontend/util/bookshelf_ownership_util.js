export const createBookshelfOwnership = function(bookshelfId, bookId) {
  return $.ajax({
    method: 'GET',
    url: 'api/bookshelf_ownerships',
    data: {
      bookshelf_id: bookshelfId,
      book_id: bookId
    }
  });
};
