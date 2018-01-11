import React from 'react';

export default function ({book}) {


  return (
    <li className="search-bar-item">
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
    </li>
  );
}
