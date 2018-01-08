import React from 'react';
import BookIndexItem from './book_index_item';

class BookFullIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBooks();
  }

  render() {
    let booksList;

      booksList = Object.values(this.props.books).map((book) => {
        if (book) {
          return (
              <BookIndexItem book={book} key={book.id} />
          );
        }
      });

      return (
        <main className="book-full-index">
          <table className="book-index-table">
            <tbody>
              <tr className="book-index-table-headers">
                <th className="table-field-cover">
                  cover
                </th>
                <th className="table-field-title">title</th>
                <th className="table-field-author">author</th>
                <th className="table-field-avg-score">avg rating</th>
                <th className="table-field-rating">rating</th>
              </tr>
              {booksList}
            </tbody>
          </table>
        </main>
      );
  }

}

export default BookFullIndex;
