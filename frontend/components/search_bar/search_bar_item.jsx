import React from 'react';
import {Link} from 'react-router-dom';

export default function ({book, clearSearch}) {


  return (
    <li className="search-bar-item-container">
      <Link className="search-bar-item" to={`/books/${book.id}`} onClick={clearSearch}>
        <div className="search-bar-item-left">
          <img src={book.coverUrl}/>
        </div>
        <div className="search-bar-item-right">
          <span className="search-bar-item-title">
            {book.title}
          </span>
          <span className="search-bar-item-author">
            by {book.author}
          </span>
        </div>
      </Link>
    </li>
  );
}
