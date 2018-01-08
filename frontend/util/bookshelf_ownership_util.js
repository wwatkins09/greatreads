export const createBookshelfOwnership = function(bookshelfOwnership) {
  return $.ajax({
    method: 'POST',
    url: 'api/bookshelf_ownerships',
    data: {bookshelf_ownership: bookshelfOwnership}
  });
};
