json.bookshelf_ownerships do
  @bookshelf_ownerships.each do |bookshelf_ownership|
    json.set! bookshelf_ownership.id do
      json.id bookshelf_ownership.id
      json.bookshelfId bookshelf_ownership.bookshelf_id
      json.bookId bookshelf_ownership.book_id
    end
  end
end
