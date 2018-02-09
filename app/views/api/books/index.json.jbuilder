@books.each do |book|
  avg_score = 2
    json.set! book.id do
      json.partial! 'api/books/book', book: book, avg_score: avg_score
    end
  end
