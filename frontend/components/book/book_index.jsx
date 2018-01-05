import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooksByBookshelfId(this.props.bookshelf.id);
  }

  render() {
    let booksList;
    if (Object.values(this.props.books).length > 0) {
      booksList = Object.values(this.props.books).map((book) => {
        return (
            <BookIndexItem book={book} key={book.id} />
        );
      });
    } else {
      booksList = (<tr></tr>);
    }
    return (
      <table className="book-index-table">
        <tbody>
          <tr>
            <th className="table-field-cover">
              cover
            </th>
            <th className="table-field-title">title</th>
            <th className="table-field-author">author</th>
            <th className="table-field-avg-rating">avg rating</th>
            <th className="table-field-rating">rating</th>
          </tr>
          {booksList}
        </tbody>
      </table>
    );
  }

}

export default BookIndex;
