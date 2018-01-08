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

book1 = Book.new(title: "Anna Karenina", author: "Leo Tolstoy", year: 1873, average_score: 5, description: "Acclaimed by many as the world's greatest novel, Anna Karenin provides a vast panorama of contemporary life in Russia and of humanity in general. In it Tolstoy uses his intense imaginative insight to create some of the most memorable characters in literature. Anna is a sophisticated woman who abandons her empty existence as the wife of Karenin and turns to Count Vronsky to fulfil her passionate nature - with tragic consequences. Levin is a reflection of Tolstoy himself, often expressing the author's own views and convictions.")
book2 = Book.new(title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, average_score: 4.5, description: "The poverty-stricken Raskolnikov believing he is exempt from moral law, murders a man only to face the consequences not only from society but from his conscience, in this seminal story of justice, morality, and redemption from one of Russia's greatest novelists.")
book3 = Book.new(title: "As I Lay Dying", author: "William Faulkner", year: 1930, average_score: 5, description: "
As I Lay Dying is Faulkner's harrowing account of the Bundren family's odyssey across the Mississippi countryside to bury Addie, their wife and mother. Told in turns by each of the family members—including Addie herself—the novel ranges in mood from dark comedy to the deepest pathos.")

book1.cover = File.open("app/assets/images/anna_karenina.jpg")
book2.cover = File.open("app/assets/images/crime_and_punishment.jpg")
book3.cover = File.open("app/assets/images/as_i_lay_dying.jpg")

book1.save!
book2.save!
book3.save!

BookshelfOwnership.create(
  bookshelf_id: Bookshelf.find_by(name: "Russian Novels", user_id: User.find_by_credentials("Will", "starwars").id).id,
  book_id: Book.find_by(title: "Anna Karenina").id
)

BookshelfOwnership.create(
  bookshelf_id: Bookshelf.find_by(name: "Russian Novels", user_id: User.find_by_credentials("Will", "starwars").id).id,
  book_id: Book.find_by(title: "Crime and Punishment").id
)

BookshelfOwnership.create(
  bookshelf_id: Bookshelf.find_by(name: "Southern Gothic", user_id: User.find_by_credentials("Will", "starwars").id).id,
  book_id: Book.find_by(title: "As I Lay Dying").id
)
