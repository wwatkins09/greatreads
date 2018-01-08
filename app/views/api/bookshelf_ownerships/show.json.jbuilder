json.bookshelfOwnership do
  json.id @bookshelf_ownership.id
  json.bookshelfId @bookshelf_ownership.bookshelf_id
  json.bookId @bookshelf_ownership.book_id
end
