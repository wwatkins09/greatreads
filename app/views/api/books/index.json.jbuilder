@books.each do |book|
    json.set! book.id do
      json.id book.id
      json.title book.title
      json.author book.author
      json.year book.year
      json.averageScore book.average_score
      json.description book.description
      json.bookshelfIds book.bookshelf_ids
      json.coverUrl asset_path(book.cover.url)
    end
  end
