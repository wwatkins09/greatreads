json.review do
  json.id review.id
  json.userId review.user_id
  json.bookId review.book_id
  json.score review.score
  json.body review.body
end

json.book do
  json.id book.id
  json.title book.title
  json.author book.author
  json.year book.year
  json.description book.description
  json.bookshelfIds book.bookshelf_ids
  json.reviewIds book.review_ids
  json.coverUrl asset_path(book.cover.url)
end

json.user do
  json.id review.user.id
  json.username review.user.username
  json.bookshelfIds review.user.bookshelf_ids
  json.photoUrl asset_path(user.photo.url)
end
