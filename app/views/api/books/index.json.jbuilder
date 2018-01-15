@books.each do |book|
    json.set! book.id do
      json.id book.id
      json.title book.title
      json.author book.author
      json.year book.year
      json.description book.description
      json.bookshelfIds book.bookshelf_ids
      json.reviewIds book.review_ids
      json.coverUrl asset_path(book.cover.url)
    end
  end
