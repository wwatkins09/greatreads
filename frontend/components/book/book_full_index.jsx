import React from 'react';
import BookFullIndexItemContainer from './book_full_index_item_container';

class BookFullIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearModals();
    this.props.fetchAllBooks().then(() => {
      this.props.fetchReviewsByUserId(this.props.currentUserId);
    });
  }

  render() {
    let booksList;

      booksList = Object.values(this.props.books).map((book, idx) => {
        if (book) {
            let review = this.props.userReviews.find(review => review && review.bookId === book.id);
          return (
              <BookFullIndexItemContainer
                book={book}
                key={book.id}
                num={idx + 1}
                userBookshelves={this.props.userBookshelves}
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
