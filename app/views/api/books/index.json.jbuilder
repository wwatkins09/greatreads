@books.each do |book|
    json.set! book.id do
      reviews = Review.where({book_id: book.id})
      if reviews.count > 0
        avg_score = reviews.average(:score).round(1)
      else
        avg_score = nil
      end
      json.partial! 'api/books/book', book: book, avg_score: avg_score
    end
  end
