import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';

export default function ({bookshelves}) {

  const sortBookshelf = function (bookshelf1, bookshelf2) {
    return bookshelf1.id - bookshelf2.id;
  };

  const bookshelvesList = bookshelves.sort(sortBookshelf).map((bookshelf) => {
    if (bookshelf) {
      return (<BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} />);
    }
  });
  return (
    <div>
    { bookshelvesList }
    </div>
  );
}
