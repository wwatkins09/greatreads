# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Book.destroy_all

User.create(username: "Demo User", password: "starwars")

User.create(username: "Will", password: "starwars")
Bookshelf.create(name: "Russian Novels", user_id: User.find_by_credentials("Will", "starwars").id)
Bookshelf.create(name: "Southern Gothic", user_id: User.find_by_credentials("Will", "starwars").id)

User.create(username: "Will2", password: "starwars")
Bookshelf.create(name: "Fantasy", user_id: User.find_by_credentials("Will2", "starwars").id)
Bookshelf.create(name: "Short story collections", user_id: User.find_by_credentials("Will2", "starwars").id)

User.create(username: "Will3", password: "starwars")
Bookshelf.create(name: "Nonfiction", user_id: User.find_by_credentials("Will3", "starwars").id)
Bookshelf.create(name: "Comedy", user_id: User.find_by_credentials("Will3", "starwars").id)

User.create(username: "Will4", password: "starwars")
Bookshelf.create(name: "History", user_id: User.find_by_credentials("Will4", "starwars").id)
Bookshelf.create(name: "Sci-fi", user_id: User.find_by_credentials("Will4", "starwars").id)

Book.create(title: "Anna Karenina", author: "Tolstoy", year: 1873, average_score: 5)
Book.create(title: "Crime and Punishment", author: "Dostoevsky", year: 1866, average_score: 4.5)

BookshelfOwnership.create(
  bookshelf_id: Bookshelf.find_by(name: "Russian Novels", user_id: User.find_by_credentials("Will", "starwars").id).id,
  book_id: Book.find_by(title: "Anna Karenina").id
)

BookshelfOwnership.create(
  bookshelf_id: Bookshelf.find_by(name: "Russian Novels", user_id: User.find_by_credentials("Will", "starwars").id).id,
  book_id: Book.find_by(title: "Crime and Punishment").id
)
