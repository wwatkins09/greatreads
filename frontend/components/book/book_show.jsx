import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import ReviewModalContainer from '../modals/review/review_modal_container';
import ReviewIndexContainer from '../review/review_index_container';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {toggled: props.bookshelfModalToggled, onDefaultShelf: false, readStatus: null}

    this.toggleBookshelves = this.toggleBookshelves.bind(this);
    this.handleBookshelfSelect = this.handleBookshelfSelect.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleAddToDefault = this.handleAddToDefault.bind(this);
  }

  componentDidMount() {
    this.props.clearModals();
    this.props.fetchBook(this.props.bookId).then(() => {}, () => {
      this.props.history.push("/");
    }).then(() => this.props.fetchUserBookshelves(this.props.currentUserId)).then(() => this.props.fetchBookshelfOwnershipsByBookId(this.props.bookId)).then(() => this.props.userBookshelves.forEach((bookshelf) => {
    if (bookshelf && bookshelf.defaultShelf === true && bookshelf.bookIds.includes(parseInt(this.props.bookId))) {
      this.setState({onDefaultShelf: true, readStatus: bookshelf.name})
        }
      })
    );

  }

  componentWillReceiveProps(props) {
    if (props.match.params.bookId !== this.props.match.params.bookId) {
      this.props.clearBookshelfOwnershipErrors();
      this.props.clearModals();
      this.props.fetchBook(props.match.params.bookId).then(() => {}, () => {
        this.props.history.push("/");
      });

      this.props.userBookshelves.forEach((bookshelf) => {
      if (bookshelf && bookshelf.defaultShelf === true && bookshelf.bookIds.includes(parseInt(this.props.bookId))) {
        this.setState({onDefaultShelf: true, readStatus: bookshelf.name})
      }
    })

    }

    this.setState({toggled: props.bookshelfModalToggled});
  }

  componentWillUnmount() {
    this.props.clearBookshelfOwnershipErrors();
  }

  toggleBookshelves(event) {
    this.props.toggleBookshelfModal();
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

  handleAddToDefault(event) {
    if (this.state.onDefaultShelf === false && this.props.wantToReadBookshelf) {
      this.handleBookshelfSelect(this.props.wantToReadBookshelf)(event);
    }
  }


  render() {
    const sortBookshelf = function (bookshelf1, bookshelf2) {
      return bookshelf1.id - bookshelf2.id;
    };


    const ctx = this;
    let readStatus = 'Want to Read';
    let bookClassName = this.state.onDefaultShelf ? 'on-default-shelf' : 'not-on-default-shelf';



    let toggleMenuClass = this.state.toggled ? "book-show-toggle-list" : "book-show-toggle-list-hidden";
    let toggleMenu = (
      <ul className={toggleMenuClass}/>
    );
    if (this.state.toggled) {
      const toggleMenuItems = this.props.userBookshelves.sort(sortBookshelf).map((bookshelf) => {
        if (bookshelf) {
          return (
            <li className="book-show-toggle-list-item" onClick={this.handleBookshelfSelect(bookshelf)} key={bookshelf.id}>{bookshelf.name}</li>
          );
        }
      });
      toggleMenu = (
        <ul className={toggleMenuClass}>
          {toggleMenuItems}
        </ul>
      );
    }
    const buttonText = (this.props.currentUserReview ? 'Edit review' : 'Leave a review!')

    return (
      <div className="book-show">
        <ReviewModalContainer book={this.props.book} review={this.props.currentUserReview} />
        <content className="book-show-image-column">
          <div className="book-show-image-container">
            <img src={this.props.book.coverUrl} alt="Cover"></img>
          </div>
          <div className="book-show-button-container">
            <div className={`${bookClassName}-container`}>
              <span className={bookClassName} onClick={this.handleAddToDefault}>{this.state.readStatus ? this.state.readStatus : 'Want to Read'} </span>
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
