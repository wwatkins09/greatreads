import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <BookIndexItem />
      </tr>
    );
  }

}

export default BookIndex;
