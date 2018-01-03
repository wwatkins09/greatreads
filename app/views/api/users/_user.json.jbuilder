# json.bookshelves do
#   user.bookshelves.each do |bookshelf|
#     json.set! bookshelf.id, bookshelf
#   end
# end

    json.id user.id
    json.username user.username
    json.bookshelf_ids user.bookshelf_ids
    json.bookshelves do
      user.bookshelves.each do |bookshelf|
            json.set! bookshelf.id, bookshelf
          end
    end

# 
