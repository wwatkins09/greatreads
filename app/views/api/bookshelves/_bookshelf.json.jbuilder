json.bookshelf do
  json.id bookshelf.id
  json.name bookshelf.name
  json.defaultShelf bookshelf.default_shelf
  json.userId bookshelf.user_id
  json.bookIds bookshelf.book_ids
end
json.user do
  json.id user.id
  json.username user.username
  json.bookshelfIds user.bookshelf_ids
  json.reviewIds user.review_ids
end
