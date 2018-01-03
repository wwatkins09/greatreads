import React from 'react';

class BookshelfIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.bookshelf.name}</li>
    );
  }

}

export default BookshelfIndexItem;
