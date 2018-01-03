json.array! @bookshelves do |bookshelf|
  json.partial! 'api/bookshelves/bookshelf', bookshelf: bookshelf
end
