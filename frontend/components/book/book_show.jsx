import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import ReviewModalContainer from '../modals/review/review_modal_container';
import ReviewIndexContainer from '../review/review_index_container';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {toggled: false}

    this.toggleBookshelves = this.toggleBookshelves.bind(this);
    this.handleBookshelfSelect = this.handleBookshelfSelect.bind(this);
    this.handleReview = this.handleReview.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.bookId);
    this.props.fetchUserBookshelves(this.props.currentUserId);
    this.props.fetchBookshelfOwnershipsByBookId(this.props.bookId);
  }

  componentWillReceiveProps(props) {
    if (props.match.params.bookId !== this.props.match.params.bookId) {
      this.props.clearBookshelfOwnershipErrors();
      this.props.fetchBook(props.match.params.bookId).then(() => {}, () => {
        this.props.history.push("/");
      });
    }
  }

  componentWillUnmount() {
    this.props.clearBookshelfOwnershipErrors();
  }

  toggleBookshelves(event) {
    event.preventDefault();
    this.setState({toggled: !this.state.toggled})
  }

  handleBookshelfSelect(bookshelf) {
    return (event) => {
      event.preventDefault();

      this.props.createBookshelfOwnership({bookshelf_id: bookshelf.id, book_id: this.props.book.id}).then(() => {
        this.props.history.push(`/bookshelves/${bookshelf.id}`)
      })

    }
  }

  handleReview(event) {
    event.preventDefault();
    this.props.clearReviewErrors();
    this.props.toggleReviewModal();
  }


  render() {
    const ctx = this;
    let readStatus = "Add to bookshelf:";
        this.props.userBookshelves.forEach((bookshelf) => {
        if (bookshelf && bookshelf.defaultShelf === true && bookshelf.bookIds.includes(parseInt(ctx.props.bookId))) {
          readStatus = bookshelf.name;
        }
      })



    let toggleMenu;
    if (this.state.toggled) {
      const toggleMenuItems = this.props.userBookshelves.map((bookshelf) => {
        if (bookshelf) {
          return (
            <li onClick={this.handleBookshelfSelect(bookshelf)} key={bookshelf.id}>{bookshelf.name}</li>
          );
        }
      })
      toggleMenu = (
        <ul className="book-show-toggle-list">
          {toggleMenuItems}
        </ul>
      );
    }
    const buttonText = (this.props.currentUserReview ? 'Edit review' : 'Leave a review!')

    return (
      <div className="book-show">
        <ReviewModalContainer book={this.props.book} review={this.props.currentUserReview} />
        <content className="book-show-image-column">
          <img src={this.props.book.coverUrl} alt="Cover"></img>
          <div className="book-show-button-container">
            <div className="book-show-bookshelf-name-container">
              <span className="book-show-bookshelf-name">{readStatus}</span>
            </div>
            <button className="book-show-button" onClick={this.toggleBookshelves}>▼
            </button>
          </div>
          {toggleMenu}
          <div className="review-toggle-button-container">
            <button className="review-toggle-button" onClick={this.handleReview}>{buttonText}</button>
          </div>
          <div className="bookshelf-ownership-errors">
            {this.props.bookshelfOwnershipErrors}
          </div>
        </content>

        <main className="book-show-main">
          <content className="book-show-body">
            <p className="book-show-body-title">{this.props.book.title}</p>
            <p>by {this.props.book.author} ({this.props.book.year})</p>
            <p>{this.props.book.description}</p>
          </content>
          <content>
            <ReviewIndexContainer />
          </content>
        </main>
      </div>
    );
  }


}

export default BookShow;
