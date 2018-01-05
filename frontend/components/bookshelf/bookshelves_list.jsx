import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';

export default function ({bookshelves}) {

  const bookshelvesList = bookshelves.map((bookshelf) => {
    if (bookshelf) {
      return (<BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} />);
    }
  });
  return (
    <div>
    { bookshelvesList}
    </div>
  );
}
