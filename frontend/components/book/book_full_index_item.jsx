import React from 'react';
import {Link} from 'react-router-dom';

class BookFullIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {toggled: false, onDefaultShelf: false, readStatus: null, starsFilled: props.review.score, score: props.review.score}

    this.handleAddToDefault = this.handleAddToDefault.bind(this);
    this.toggleBookshelves = this.toggleBookshelves.bind(this);
    this.handleBookshelfSelect = this.handleBookshelfSelect.bind(this);
    this.fillStar = this.fillStar.bind(this);
    this.emptyStars = this.emptyStars.bind(this);
    this.handleStarSelect = this.handleStarSelect.bind(this);
  }

  componentWillReceiveProps(props) {
    if (!props.toggled) {
      this.setState({toggled: props.toggled});
    }

    if (props.userBookshelves) {
      props.userBookshelves.forEach((bookshelf) => {
        if (bookshelf && bookshelf.defaultShelf === true && bookshelf.bookIds.includes(this.props.book.id)) {
          this.setState({onDefaultShelf: true, readStatus: bookshelf.name})
          }
        }
      )
    }

    if (props.review) {
      this.setState({starsFilled: props.review.score, score: props.review.score})
    }

  }


  handleAddToDefault(event) {
    if (this.state.onDefaultShelf === false && this.props.wantToReadBookshelf) {
      this.handleBookshelfSelect(this.props.wantToReadBookshelf)(event);
    }
  }

  handleBookshelfSelect(bookshelf) {
      return (event) => {
        event.preventDefault();

        this.props.createBookshelfOwnership({bookshelf_id: bookshelf.id, book_id: this.props.book.id}).then(() => {
          this.props.history.push(`/bookshelves/${bookshelf.id}`)
        })

      }
  }

  toggleBookshelves(event) {
    this.props.toggleBookshelfModal();
    this.setState({toggled: !this.state.toggled})
  }

  classNameGenerator(score, starValue) {
    if (score >= starValue) {
      return 'star-filled-selectable';
    } else {
      return 'star-empty-selectable';
    }
  }

  fillStar(number) {
    return (event) => {
      this.setState({starsFilled: number})
    };
  }

  emptyStars(event) {
    this.setState({starsFilled: this.state.score})
  }

  handleStarSelect(score) {
    return (event) => {
      if (this.props.review.id) {
        this.props.updateReview({id: this.props.review.id, score, body: this.props.review.body, bookId: this.props.book.id, userId: this.props.currentUserId}).then(() => this.props.history.push(`/books/${this.props.book.id}`));
      } else {
        this.props.createReview({score, body: '', bookId: this.props.book.id, userId: this.props.currentUserId}).then(() => {this.props.history.push(`/books/${this.props.book.id}`);
        });
      }
    }
  }

  render() {
    const sortBookshelf = function (bookshelf1, bookshelf2) {
      return bookshelf1.id - bookshelf2.id;
    };

    let toggleMenuClass = this.state.toggled ? "full-index-toggle-list" : "full-index-toggle-list-hidden";
    let readStatus = this.state.readStatus || 'Want to Read';
    let bookClassName = this.state.onDefaultShelf ? 'on-default-shelf' : 'not-on-default-shelf';

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

    return (

      <tr className="book-full-row">
        <td className="book-full-number">{this.props.num}</td>
        <td className="book-full-cover">
          <Link to={`/books/${this.props.book.id}`}>
            <img src={this.props.book.coverUrl} />
          </Link>
        </td>
        <td className="book-full-info">
          <Link className="book-full-title" to={`/books/${this.props.book.id}`}>{this.props.book.title}</Link>
          <span className="book-full-author">by {this.props.book.author}</span>
          <span className="book-full-avg-score">avg rating: {this.props.book.avgScore}</span>
        </td>
        <td className="book-full-button">
          {toggleMenu}
          <div className="book-full-button-container">
            <div className={`${bookClassName}-container`}>
              <span className={bookClassName} onClick={this.handleAddToDefault}>{readStatus}</span>
            </div>
            <button className="book-show-button" onClick={this.toggleBookshelves}>▼
            </button>
          </div>
          <span className="my-rating">My rating:</span>
            <div className="review-score">
              <span className={this.classNameGenerator(this.state.starsFilled, 1)} onMouseEnter={this.fillStar(1)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(1)}></span>
              <span className={this.classNameGenerator(this.state.starsFilled, 2)} onMouseEnter={this.fillStar(2)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(2)}></span>
              <span className={this.classNameGenerator(this.state.starsFilled, 3)} onMouseEnter={this.fillStar(3)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(3)}></span>
              <span className={this.classNameGenerator(this.state.starsFilled, 4)} onMouseEnter={this.fillStar(4)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(4)}></span>
              <span className={this.classNameGenerator(this.state.starsFilled, 5)} onMouseEnter={this.fillStar(5)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(5)}></span>
            </div>
        </td>
      </tr>
    );
  }
}

export default BookFullIndexItem;
