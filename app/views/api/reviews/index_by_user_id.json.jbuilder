json.reviews do

@reviews.each do |review|
    json.set! review.id do
      json.id review.id
      json.userId review.user_id
      json.bookId review.book_id
      json.score review.score
      json.body review.body
    end
  end
end

json.user do
  json.id @user.id
  json.username @user.username
  json.reviewIds @user.review_ids
  json.bookshelfIds @user.bookshelf_ids
end

json.books do
  @reviews.each do |review|
    json.set! review.book_id do
    json.id review.book.id
    json.title review.book.title
    json.author review.book.author
    json.year review.book.year
    json.description review.book.description
    json.bookshelfIds review.book.bookshelf_ids
    json.reviewIds review.book.review_ids
    json.coverUrl asset_path(review.book.cover.url)
    end
  end
end
