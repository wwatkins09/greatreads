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

json.book do
  json.id @book.id
  json.title @book.title
  json.author @book.author
  json.year @book.year
  json.description @book.description
  json.bookshelfIds @book.bookshelf_ids
  json.reviewIds @book.review_ids
  json.coverUrl asset_path(@book.cover.url)
end

json.users do
  @reviews.each do |review|
    json.set! review.user_id do
      json.id review.user.id
      json.username review.user.username
      json.bookshelfIds review.user.bookshelf_ids
      json.photoUrl asset_path(review.user.photo.url)
    end
  end
end
