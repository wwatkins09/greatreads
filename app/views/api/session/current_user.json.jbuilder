json.user do
  json.id @user.id
  json.username @user.username
  json.bookshelfIds @user.bookshelf_ids.sort
  json.bookshelves do
    @user.bookshelves.sort_by {|bookshelf| bookshelf.id}.each do |bookshelf|
          json.set! bookshelf.id, bookshelf
        end
  end
end
