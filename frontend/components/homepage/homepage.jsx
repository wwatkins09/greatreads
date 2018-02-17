import React from 'react';

const Homepage = (props) => {

  return (
    <div className="homepage">
      <content className="homepage-welcome">
        <h1>Looking for a great read?</h1>
        <h2>Look no further.</h2>
      </content>
      <article className="homepage-ideas">
        <span>
          <p>Looking for something new?</p>
          <p>Browse our collection of books and see if something catches your eye. You can make your own bookshelves to sort books by genre, time period, country - whatever you want!</p>
        </span>
        <span>
          <p>Can't remember all the books you've read?</p>
          <p>Keep track of what books you've already read, as well as books you're reading now or want to read in the future.</p>
        </span>
        <span>
          <p>Have an opinion?</p>
          <p>Leave a review to show whether you couldn't put it down or couldn't stand it. If you're not sure whether it's worth a try, check out what other users have said.</p>
        </span>
      </article>
      <content className="homepage-books">
        <p>more stuff here!</p>
      </content>
    </div>
  )
};

export default Homepage;
