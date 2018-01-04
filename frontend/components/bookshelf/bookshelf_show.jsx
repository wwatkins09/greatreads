import React from 'react';

class BookshelfShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBookshelf(this.props.bookshelfId);
  }

  render() {
    return (
      <main>
        Books go here!
      </main>
    );
  }
}

export default BookshelfShow;
