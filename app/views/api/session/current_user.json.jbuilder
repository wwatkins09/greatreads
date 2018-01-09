json.user do
  json.id @user.id
  json.username @user.username
  json.bookshelfIds @user.bookshelf_ids
  json.bookshelves do
    @user.bookshelves.each do |bookshelf|
          json.set! bookshelf.id, bookshelf
        end
  end
end
