import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';

class BookshelfIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookshelves();
  }

  render() {
    const bookshelvesList = this.props.bookshelves.map((bookshelf) => {
      return (<BookshelfIndexItem bookshelf={bookshelf} />);
    });
    return (
      <main>
        <h3>Bookshelves:</h3>
        <ul>
          {bookshelvesList}
        </ul>
      </main>
    );
  }

}

export default BookshelfIndex;
