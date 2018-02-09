@books.each do |book|
  avg_score = 2
    json.set! book.id do
      avg_score = Review.where({book_id: book.id}).average(:score)
      avg_score = avg_score.round(2) if avg_score
      json.partial! 'api/books/book', book: book, avg_score: avg_score
    end
  end
