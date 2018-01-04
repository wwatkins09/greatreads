json.bookshelf do
  json.id bookshelf.id
  json.name bookshelf.name
  json.userId bookshelf.user_id
end
json.user do
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.bookshelfIds user.bookshelf_ids
  end
end
