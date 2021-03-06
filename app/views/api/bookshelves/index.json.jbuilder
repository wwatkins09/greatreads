json.bookshelves do
  @bookshelves.each do |bookshelf|
    json.set! bookshelf.id do
      json.id bookshelf.id
      json.name bookshelf.name
      json.userId bookshelf.user_id
      json.defaultShelf bookshelf.default_shelf
      json.bookIds bookshelf.book_ids
    end
  end
end

json.user do
  json.set! @user.id do
    json.id @user.id
    json.username @user.username
    json.bookshelfIds @user.bookshelf_ids
    json.reviewIds @user.review_ids
    json.photoUrl asset_path(@user.photo.url)
  end
end
