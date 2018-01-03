# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Will", password: "starwars")

Bookshelf.create(name: "Russian Novels", user_id: User.find_by_credentials("Will", "starwars").id)
Bookshelf.create(name: "Southern Gothic", user_id: User.find_by_credentials("Will", "starwars").id)
