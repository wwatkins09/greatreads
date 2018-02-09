import React from 'react';
import BookFullIndexItem from './book_full_index_item';

class BookFullIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearModals();
    this.props.fetchAllBooks();
  }

  render() {
    let booksList;

      booksList = Object.values(this.props.books).map((book) => {
        if (book) {
          return (
              <BookFullIndexItem book={book} key={book.id} />
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
              </tr>
              {booksList}
            </tbody>
          </table>
        </main>
      );
  }

}

export default BookFullIndex;
