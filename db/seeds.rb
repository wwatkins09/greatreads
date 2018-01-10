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

book1 = Book.new(title: "Anna Karenina", author: "Leo Tolstoy", year: 1873, description: "Acclaimed by many as the world's greatest novel, Anna Karenin provides a vast panorama of contemporary life in Russia and of humanity in general. In it Tolstoy uses his intense imaginative insight to create some of the most memorable characters in literature. Anna is a sophisticated woman who abandons her empty existence as the wife of Karenin and turns to Count Vronsky to fulfil her passionate nature - with tragic consequences. Levin is a reflection of Tolstoy himself, often expressing the author's own views and convictions.")
book2 = Book.new(title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, description: "The poverty-stricken Raskolnikov believing he is exempt from moral law, murders a man only to face the consequences not only from society but from his conscience, in this seminal story of justice, morality, and redemption from one of Russia's greatest novelists.")
book3 = Book.new(title: "As I Lay Dying", author: "William Faulkner", year: 1930, description: "
As I Lay Dying is Faulkner's harrowing account of the Bundren family's odyssey across the Mississippi countryside to bury Addie, their wife and mother. Told in turns by each of the family members—including Addie herself—the novel ranges in mood from dark comedy to the deepest pathos.")
book4 = Book.new(title: "The Handmaid's Tale", author: "Margaret Atwood", year: 1985, description: "Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets whose signs are now pictures instead of words because women are no longer allowed to read. She must lie on her back once a month and pray that the Commander makes her pregnant, because in an age of declining births, Offred and the other Handmaids are valued only if their ovaries are viable. Offred can remember the years before, when she lived and made love with her husband, Luke; when she played with and protected her daughter; when she had a job, money of her own, and access to knowledge. But all of that is gone now...")
book5 = Book.new(title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967, description: "The brilliant, bestselling, landmark novel that tells the story of the Buendia family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love—in rich, imaginative prose that has come to define an entire genre known as 'magical realism'.")
book6 = Book.new(title: "Bleak House", author: "Charles Dickens", year: 1853, description: "Bleak House is a novel by Charles Dickens, published in 20 monthly installments between March 1852 and September 1853. It is held to be one of Dickens's finest novels, containing one of the most vast, complex and engaging arrays of minor characters and sub-plots in his entire canon.")
book7 = Book.new(title: "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript", author: "David Herman", year: 2012, description: "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency.")
book8 = Book.new(title: "On the Road", author: "Jack Kerouac", year: 1955, description: "On the Road chronicles Jack Kerouac's years traveling the North American continent with his friend Neal Cassady, 'a sideburned hero of the snowy West.' As 'Sal Paradise' and 'Dean Moriarty,' the two roam the country in a quest for self-knowledge and experience. Kerouac's love of America, his compassion for humanity, and his sense of language as jazz combine to make On the Road an inspirational work of lasting importance.")
book9 = Book.new(title: "A Good Man is Hard to Find", author: "Flannery O'Connor", year: 1953, description: "This now classic book revealed Flannery O'Connor as one of the most original and provocative writers to emerge from the South. Her apocalyptic vision of life is expressed through grotesque, often comic situations in which the principal character faces a problem of salvation: the grandmother, in the title story, confronting the murderous Misfit; a neglected four-year-old boy looking for the Kingdom of Christ in the fast-flowing waters of the river; General Sash, about to meet the final enemy.")
book10 = Book.new(title: "Bossypants", author: "Tina Fey", year: 2011, description: "Before Liz Lemon, before 'Weekend Update,' before 'Sarah Palin,' Tina Fey was just a young girl with a dream: a recurring stress dream that she was being chased through a local airport by her middle-school gym teacher. She also had a dream that one day she would be a comedian on TV. \n She has seen both these dreams come true. \n At last, Tina Fey's story can be told. From her youthful days as a vicious nerd to her tour of duty on Saturday Night Live; from her passionately halfhearted pursuit of physical beauty to her life as a mother eating things off the floor; from her one-sided college romance to her nearly fatal honeymoon—from the beginning of this paragraph to this final sentence. \n Tina Fey reveals all, and proves what we've all suspected: you're no one until someone calls you bossy.")
book11 = Book.new(title: "Brideshead Revisited", author: "Evelyn Waugh", year: 1945, description: "The most nostalgic and reflective of Evelyn Waugh's novels, Brideshead Revisited looks back to the golden age before the Second World War. It tells the story of Charles Ryder's infatuation with the Marchmains and the rapidly-disappearing world of privilege they inhabit. Enchanted first by Sebastian at Oxford, then by his doomed Catholic family, in particular his remote sister, Julia, Charles comes finally to recognize only his spiritual and social distance from them.")
book12 = Book.new(title: "Catch-22", author: "Joseph Heller", year: 1961, description: "The novel is set during World War II, from 1942 to 1944. It mainly follows the life of Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier. Most of the events in the book occur while the fictional 256th Squadron is based on the island of Pianosa, in the Mediterranean Sea, west of Italy. The novel looks into the experiences of Yossarian and the other airmen in the camp, who attempt to maintain their sanity while fulfilling their service requirements so that they may return home.")
book13 = Book.new(title: "Dune", author: "Frank Herbert", year: 1965, description: "Set in the far future amidst a sprawling feudal interstellar empire where planetary dynasties are controlled by noble houses that owe an allegiance to the imperial House Corrino, Dune tells the story of young Paul Atreides (the heir apparent to Duke Leto Atreides and heir of House Atreides) as he and his family accept control of the desert planet Arrakis, the only source of the 'spice' melange, the most important and valuable substance in the cosmos. The story explores the complex, multi-layered interactions of politics, religion, ecology, technology, and human emotion as the forces of the empire confront each other for control of Arrakis.
")
book14 = Book.new(title: "Eugene Onegin", author: "Alexander Pushkin", year: 1833, description: "Eugene Onegin is the master work of the poet whom Russians regard as the fountainhead of their literature. Set in imperial Russia during the 1820s, Pushkin's novel in verse follows the emotions and destiny of three men - Onegin the bored fop, Lensky the minor elegiast, and a stylized Pushkin himself - and the fates and affections of three women - Tatyana the provincial beauty, her sister Olga, and Pushkin's mercurial Muse. Engaging, full of suspense, and varied in tone, it also portrays a large cast of other characters and offers the reader many literary, philosophical, and autobiographical digressions, often in a highly satirical vein. Eugene Onegin was Pushkin's own favourite work, and it shows him attempting to transform himself from romantic poet into realistic novelist.")
book15 = Book.new(title: "I Know Why the Caged Bird Sings", author: "Maya Aungelou", year: 1969, description: "Sent by their mother to live with their devout, self-sufficient grandmother in a small Southern town, Maya and her brother, Bailey, endure the ache of abandonment and the prejudice of the local 'powhitetrash.' At eight years old and back at her mother’s side in St. Louis, Maya is attacked by a man many times her age—and has to live with the consequences for a lifetime. Years later, in San Francisco, Maya learns that love for herself, the kindness of others, her own strong spirit, and the ideas of great authors ('I met and fell in love with William Shakespeare') will allow her to be free instead of imprisoned.")
book16 = Book.new(title: "If on a Winter's Night a Traveler", author: "Italo Calvino", year: 1979, description: "If on a Winter's Night a Traveler is a marvel of ingenuity, an experimental text that looks longingly back to the great age of narration--'when time no longer seemed stopped and did not yet seem to have exploded.' Italo Calvino's novel is in one sense a comedy in which the two protagonists, the Reader and the Other Reader, ultimately end up married, having almost finished If on a Winter's Night a Traveler. In another, it is a tragedy, a reflection on the difficulties of writing and the solitary nature of reading. The Reader buys a fashionable new book, which opens with an exhortation: 'Relax. Concentrate. Dispel every other thought. Let the world around you fade.' Alas, after 30 or so pages, he discovers that his copy is corrupted, and consists of nothing but the first section, over and over. Returning to the bookshop, he discovers the volume, which he thought was by Calvino, is actually by the Polish writer Bazakbal. Given the choice between the two, he goes for the Pole, as does the Other Reader, Ludmilla. But this copy turns out to be by yet another writer, as does the next, and the next.")
book17 = Book.new(title: "Jane Eyre", author: "Charlotte Bronte", year: 1847, description: "Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. But there is a terrifying secret inside the gloomy, forbidding Thornfield Hall. Is Rochester hiding from Jane? Will Jane be left heartbroken and exiled once again?")
book18 = Book.new(title: "Jude the Obscure", author: "Thomas Hardy", year: 1895, description: "Jude Fawley's hopes of a university education are lost when he is trapped into marrying the earthy Arabella, who later abandons him. Moving to the town of Christminster where he finds work as a stonemason, Jude meets and falls in love with his cousin Sue Bridehead, a sensitive, freethinking 'New Woman'.")
book19 = Book.new(title: "Mrs. Dalloway", author: "Virginia Woolf", year: 1923, description: "Mrs. Dalloway chronicles a June day in the life of Clarissa Dalloway–a day that is taken up with running minor errands in preparation for a party and that is punctuated, toward the end, by the suicide of a young man she has never met. In giving an apparently ordinary day such immense resonance and significance–infusing it with the elemental conflict between death and life–Virginia Woolf triumphantly discovers her distinctive style as a novelist. Originally published in 1925, Mrs. Dalloway is Woolf’s first complete rendering of what she described as the “luminous envelope” of consciousness: a dazzling display of the mind’s inside as it plays over the brilliant surface and darker depths of reality.")
book20 = Book.new(title: "Pale Fire", author: "Vladimir Nabokov", year: 1962, description: "The American poet John Shade is dead; murdered. His last poem, 'Pale Fire', is put into a book, together with a preface, a lengthy commentary and notes by Shade's editor, Charles Kinbote. Known on campus as the 'Great Beaver', Kinbote is haughty, inquisitive, intolerant, but is he also mad, bad - and even dangerous? As his wildly eccentric annotations slide into the personal and the fantastical, Kinbote reveals perhaps more than he should.")
book21 = Book.new(title: "Something Wicked This Way Comes", author: "Ray Bradbury", year: 1962, description: "A carnival rolls in sometime after the midnight hour on a chill Midwestern October eve, ushering in Halloween a week before its time. A calliope's shrill siren song beckons to all with a seductive promise of dreams and youth regained. In this season of dying, Cooger & Dark's Pandemonium Shadow Show has come to Green Town, Illinois, to destroy every life touched by its strange and sinister mystery. And two inquisitive boys standing precariously on the brink of adulthood will soon discover the secret of the satanic raree-show's smoke, mazes, and mirrors, as they learn all too well the heavy cost of wishes - and the stuff of nightmare.")
book22 = Book.new(title: "Song of Solomon", author: "Toni Morrison", year: 1977, description: "Milkman Dead was born shortly after a neighborhood eccentric hurled himself off a rooftop in a vain attempt at flight. For the rest of his life he, too, will be trying to fly. With this brilliantly imagined novel, Toni Morrison transfigures the coming-of-age story as audaciously as Saul Bellow or Gabriel García Márquez. As she follows Milkman from his rustbelt city to the place of his family’s origins, Morrison introduces an entire cast of strivers and seeresses, liars and assassins, the inhabitants of a fully realized black world.")
book23 = Book.new(title: "The Feminine Mystique", author: "Betty Friedan", year: 1963, description: "Landmark, groundbreaking, classic—these adjectives barely do justice to the pioneering vision and lasting impact of The Feminine Mystique. Published in 1963, it gave a pitch-perfect description of “the problem that has no name”: the insidious beliefs and institutions that undermined women’s confidence in their intellectual capabilities and kept them in the home. Writing in a time when the average woman first married in her teens and 60 percent of women students dropped out of college to marry, Betty Friedan captured the frustrations and thwarted ambitions of a generation and showed women how they could reclaim their lives. Part social chronicle, part manifesto, The Feminine Mystique is filled with fascinating anecdotes and interviews as well as insights that continue to inspire.")
book24 = Book.new(title: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, description: "First published in 1939, Steinbeck’s Pulitzer Prize winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads, driven from their homestead and forced to travel west to the promised land of California. Out of their trials and their repeated collisions against the hard realities of an America divided into haves and have-nots evolves a drama that is intensely human yet majestic in its scale and moral vision, elemental yet plainspoken, tragic but ultimately stirring in its human dignity.")
book25 = Book.new(title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, description: "Jay Gatsby is the man who has everything. But one thing will always be out of his reach. Everybody who is anybody is seen at his glittering parties. Day and night his Long Island mansion buzzes with bright young things drinking, dancing, and debating his mysterious character. For Gatsby---young, handsome, and fabulously rich---always seems alone in the crowd, watching and waiting, though no one knows what for. Beneath the shimmering surface of his life he is hiding a secret: a silent longing that can never be fulfilled. And soon this destructive obsession will force his world to unravel.")
book26 = Book.new(title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, description: "Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent.")
book27 = Book.new(title: "The Man Who Mistook His Wife for a Hat and Other Clinical Tales", author: "Oliver Sacks", year: 1985, description: "In his most extraordinary book, 'one of the great clinical writers of the twentieth century' (The New York Times) recounts the case histories of patients lost in the bizarre, apparently inescapable world of neurological disorders. Oliver Sacks's The Man Who Mistook His Wife for a Hat tells the stories of individuals afflicted with fantastic perceptual and intellectual aberrations: patients who have lost their memories and with them the greater part of their pasts; who are no longer able to recognize people and common objects; who are stricken with violent tics and grimaces or who shout involuntary obscenities; whose limbs have become alien; who have been dismissed as retarded yet are gifted with uncanny artistic or mathematical talents.")
book28 = Book.new(title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890, description: "Written in his distinctively dazzling manner, Oscar Wilde’s story of a fashionable young man who sells his soul for eternal youth and beauty is the author’s most popular work. The tale of Dorian Gray’s moral disintegration caused a scandal when it ﬁrst appeared in 1890, but though Wilde was attacked for the novel’s corrupting inﬂuence, he responded that there is, in fact, “a terrible moral in Dorian Gray.” Just a few years later, the book and the aesthetic/moral dilemma it presented became issues in the trials occasioned by Wilde’s homosexual liaisons, which resulted in his imprisonment. Of Dorian Gray’s relationship to autobiography, Wilde noted in a letter, “Basil Hallward is what I think I am: Lord Henry what the world thinks me: Dorian what I would like to be—in other ages, perhaps.”")
book29 = Book.new(title: "The Wasteland", author: "T.S. Eliot", year: 1922, description: "A central work of modernism, 'The Waste Land' evokes a world of moral, sexual and spiritual decay. In it Eliot gives voice to the deep intellectual uncertainty that had existed from the 1870s and to his own sense of the collapse of civilization.")
book30 = Book.new(title: "The Wind-Up Bird Chronicle", author: "Haruki Murakami", year: 1994, description: "In a Tokyo suburb a young man named Toru Okada searches for his wife's missing cat. Soon he finds himself looking for his wife as well in a netherworld that lies beneath the placid surface of Tokyo. As these searches intersect, Okada encounters a bizarre group of allies and antagonists: a psychic prostitute; a malevolent yet mediagenic politician; a cheerfully morbid sixteen-year-old-girl; and an aging war veteran who has been permanently changed by the hideous things he witnessed during Japan's forgotten campaign in Manchuria.
")
book31 = Book.new(title: "Their Eyes Were Watching God", author: "Zora Neale Hurston", year: 1937, description: "Fair and long-legged, independent and articulate, Janie Crawford sets out to be her own person -- no mean feat for a black woman in the '30s. Janie's quest for identity takes her through three marriages and into a journey back to her roots.")
book32 = Book.new(title: "Voices from Chernobyl: The Oral History of a Nuclear Disaster", author: "Svetlana Alexievich", year: 1997, description: "On April 26, 1986, the worst nuclear reactor accident in history occurred in Chernobyl and contaminated as much as three quarters of Europe. Voices from Chernobyl is the first book to present personal accounts of the tragedy. Journalist Svetlana Alexievich interviewed hundreds of people affected by the meltdown---from innocent citizens to firefighters to those called in to clean up the disaster---and their stories reveal the fear, anger, and uncertainty with which they still live. Composed of interviews in monologue form, Voices from Chernobyl is a crucially important work, unforgettable in its emotional power and honesty.")
book33 = Book.new(title: "When You Are Engulfed In Flames", author: "David Sedaris", year: 2008, description: "David Sedaris has written yet another book of essays (his sixth). Subjects include a parasitic worm that once lived in his mother-in-law's leg, an encounter with a dingo, and the recreational use of an external catheter. Also recounted is the buying of a human skeleton and the author's attempt to quit smoking In Tokyo. \n Master of nothing, at the dead center of his game, Sedaris proves that when you play with matches, you sometimes light the whole pack on fire.")


book1.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/anna_karenina.jpg")
book2.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/crime_and_punishment.jpg")
book3.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/as_i_lay_dying.jpg")
book4.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/the_handmaids_tale.jpg")
book5.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/one_hundred_years_of_solitude.jpg")
book6.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/bleak_house.jpg")
book7.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/effective_javascript.jpg")
book8.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/on_the_road.jpg")
book9.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/a_good_man_is_hard_to_find.jpg")
book10.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/bossypants.jpg")
book11.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/brideshead_revisited.jpg")
book12.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/catch_22.jpg")
book13.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/dune.jpg")
book14.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/eugene_onegin.jpg")
book15.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/i_know_why_the_caged_bird_sings.jpg")
book16.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/if_on_a_winters_night_a_traveler.jpg")
book17.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/jane_eyre.jpg")
book18.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/jude_the_obscure.jpg")
book19.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/mrs_dalloway.jpg")
book20.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/pale_fire.jpg")
book21.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/something_wicked_this_way_comes.jpg")
book22.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/song_of_solomon.jpg")
book23.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/the_feminine_mystique.jpg")
book24.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/the_grapes_of_wrath.jpg")
book25.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/the_great_gatsby.jpg")
book26.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/the_hobbit.jpg")
book27.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/the_man_who_mistook_his_wife_for_a_hat_cover.jpg")
book28.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/the_picture_of_dorian_gray.jpg")
book29.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/the_wasteland.jpg")
book30.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/the_wind_up_bird_chronicle.jpg")
book31.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/their_eyes_were_watching_god.jpg")
book32.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/voices_from_chernobyl.jpg")
book33.cover = open("https://s3.amazonaws.com/aa-greatreads-dev/when_you_are_engulfed_in_flames.jpg")


book1.save!
book2.save!
book3.save!
book4.save!
book5.save!
book6.save!
book7.save!
book8.save!
book9.save!
book10.save!
book11.save!
book12.save!
book13.save!
book14.save!
book15.save!
book16.save!
book17.save!
book18.save!
book19.save!
book20.save!
book21.save!
book22.save!
book23.save!
book24.save!
book25.save!
book26.save!
book27.save!
book28.save!
book29.save!
book30.save!
book31.save!
book32.save!
book33.save!

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
