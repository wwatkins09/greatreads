import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.bookshelfId) {
      this.props.fetchBooksByBookshelfId(this.props.bookshelfId);
    } else {
      this.props.fetchAllBooks();
    }
  }

  componentWillReceiveProps(props) {
    if (props.location.pathname !== this.props.location.pathname) {
      this.props.fetchBooksByBookshelfId(props.bookshelfId);
    }
  }

  render() {
    let books = (this.props.bookshelfBooks) ? this.props.bookshelfBooks : this.props.books;
      const booksList = Object.values(books).map((book, idx) => {
        if (book) {
          return (
              <BookIndexItem book={book}
                key={book.id}
                bookshelf={this.props.bookshelf}
                deleteBookshelfOwnership={this.props.deleteBookshelfOwnership}
                currentUserId={this.props.currentUserId}
                review={this.props.reviews[idx] || {score: 0}}
                createReview={this.props.createReview}
                updateReview={this.props.updateReview}
              />
          );
        }
      });
    return (
      <table className="book-index-table">
        <tbody>
          <tr className="book-index-table-headers">
            <th className="table-field-cover">cover</th>
            <th className="table-field-title">title</th>
            <th className="table-field-author">author</th>
            <th className="table-field-avg-score">avg rating</th>
            <th className="table-field-score">user's rating</th>
            <th className="table-field-delete"></th>
          </tr>
          {booksList}
        </tbody>
      </table>
    );
  }

}

export default BookIndex;
