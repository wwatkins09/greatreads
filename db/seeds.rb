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
book4 = Book.new(title: "The Handmaid's Tale", author: "Margaret Atwood", year: 1985, average_score: 5, description: "Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets whose signs are now pictures instead of words because women are no longer allowed to read. She must lie on her back once a month and pray that the Commander makes her pregnant, because in an age of declining births, Offred and the other Handmaids are valued only if their ovaries are viable. Offred can remember the years before, when she lived and made love with her husband, Luke; when she played with and protected her daughter; when she had a job, money of her own, and access to knowledge. But all of that is gone now...")
book5 = Book.new(title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967, average_score: 5, description: "The brilliant, bestselling, landmark novel that tells the story of the Buendia family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love—in rich, imaginative prose that has come to define an entire genre known as 'magical realism'.")
book6 = Book.new(title: "Bleak House", author: "Charles Dickens", year: 1853, average_score: 4, description: "Bleak House is a novel by Charles Dickens, published in 20 monthly installments between March 1852 and September 1853. It is held to be one of Dickens's finest novels, containing one of the most vast, complex and engaging arrays of minor characters and sub-plots in his entire canon.")
book7 = Book.new(title: "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript", author: "David Herman", year: 2012, average_score: 3, description: "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency.")

book1.cover = File.open("app/assets/images/anna_karenina.jpg")
book2.cover = File.open("app/assets/images/crime_and_punishment.jpg")
book3.cover = File.open("app/assets/images/as_i_lay_dying.jpg")
book4.cover = File.open("app/assets/images/the_handmaids_tale.jpg")
book5.cover = File.open("app/assets/images/one_hundred_years_of_solitude.jpg")
book6.cover = File.open("app/assets/images/bleak_house.jpg")
book7.cover = File.open("app/assets/images/effective_javascript.jpg")


book1.save!
book2.save!
book3.save!
book4.save!
book5.save!
book6.save!
book7.save!

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
