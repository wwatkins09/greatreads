import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';

class BookshelfIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserBookshelves();
  }

  render() {
    let bookshelvesList;
    if (this.props.user.bookshelves) {
      bookshelvesList = Object.values(this.props.user.bookshelves).map((bookshelf) => {
        return (<BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} />);
      });
    }
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
