import React from 'react';

export default function ({book}) {


  return (
    <li>
      <span className="search-bar-item">
        {book.title}
      </span>
    </li>
  );
}
