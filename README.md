# README

<a href="https://aa-greatreads.herokuapp.com">
<img width=25% height=25% src="https://i.imgur.com/SKhVy5z.png" />
</a>

Greatreads is a web-app inspired by Goodreads that allows users to discover, organize, and review various books. It operates with Ruby on Rails and a Postgresql database on the backend, as well as with React and Redux architecture on the frontend.

## Key Features

* User Authentication

* Bookshelves

* Books

* Reviews

## User Authentication

<img src="https://i.imgur.com/5JLsW47.png" />

From the homepage, users can enter the site by either signing up or logging into a previously existing account. To bypass this step, users can also log in via a demo account.

## Bookshelves

<img src="https://i.imgur.com/zX6K1Nn.png" />

After logging/signing in, users are redirected to their profile page, which lists all of the bookshelves that they own. Every user has three bookshelves by default: Read, Currently Reading, and Want to Read. These bookshelves are mutually exclusive, meaning that if a book is added to "Want to Read" and then added to "Currently Reading", it will no longer exist on "Want to Read". Aside from these, users may create their own bookshelves, as well as edit and delete them.

## Books

<img src="https://i.imgur.com/mFBUVJP.png" />

<img src="https://i.imgur.com/6NdXsvj.png" />

Books can be found by either browsing the site's complete list or by searching for the title or author. On a book's individual page, a user can choose to add it to any of their bookshelves.

## Reviews

Book reviews on Greatreads consist of two parts: a numerical rating on a scale of 1-5, and an optional comment. A user can leave one review for each book, as well as edit and delete them. All users' reviews are visible on a book's page.

## Future Directions

* Allow users to add photo to profile
* Allow users to interact with each other via comments on reviews, friendships, etc.
