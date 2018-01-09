@reviews.each do |review|
    json.set! review.id do
      json.id review.id
      json.userId review.user_id
      json.bookId review.book_id
      json.score review.score
      json.body review.body
    end
  end
