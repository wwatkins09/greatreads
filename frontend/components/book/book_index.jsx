import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooksByBookshelfId(this.props.bookshelfId);
  }

  componentWillReceiveProps(props) {
    if (props.location.pathname !== this.props.location.pathname) {
      this.props.fetchBooksByBookshelfId(props.bookshelfId);
    }
  }

  render() {
    let booksList;

      booksList = Object.values(this.props.bookshelfBooks).map((book) => {
        if (book) {
          return (
              <BookIndexItem book={book} key={book.id} removeBookshelfOwnership={this.props.removeBookshelfOwnership} />
          );
        }
      });
    return (
      <table className="book-index-table">
        <tbody>
          <tr className="book-index-table-headers">
            <th className="table-field-cover">
              cover
            </th>
            <th className="table-field-title">title</th>
            <th className="table-field-author">author</th>
            <th className="table-field-avg-score">avg rating</th>
            <th className="table-field-delete"></th>
          </tr>
          {booksList}
        </tbody>
      </table>
    );
  }

}

export default BookIndex;
