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

      booksList = Object.values(this.props.books).map((book, idx) => {
        if (book) {
          let review;
          if (this.props.userReviews[0]) {
            review = this.props.userReviews.find(review => review.bookId === book.id);
          }
          return (
              <BookFullIndexItem
                book={book}
                key={book.id}
                num={idx + 1}
                toggleBookshelfModal={this.props.toggleBookshelfModal}
                toggled={this.props.toggled}
                userBookshelves={this.props.userBookshelves}
                createBookshelfOwnership={this.props.createBookshelfOwnership}
                history={this.props.history}
                wantToReadBookshelf={this.props.wantToReadBookshelf}
                review={review}
                />
          );
        }
      });
      return (
        <main className="book-full-index">
          <table className="book-full-index-table">
            <tbody>
              <tr className="book-full-index-table-headers">
                <th className="book-full-number"></th>
                <th className="book-full-cover"></th>
                <th className="book-full-info"></th>
                <th className="book-full-button-header"></th>
              </tr>
              {booksList}
            </tbody>
          </table>
        </main>
      );
  }

}

export default BookFullIndex;
