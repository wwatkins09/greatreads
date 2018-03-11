import React from 'react';
import {Link} from 'react-router-dom';

class BookIndexItem extends React.Component {

  constructor(props) {
    super(props);
    const canReview = (!props.bookshelf || (props.currentUserId === props.bookshelf.userId));

    this.state = {canReview, review: this.props.review, score: this.props.review.score, starsFilled: this.props.review.score};

    this.handleRemove = this.handleRemove.bind(this);
    this.fillStar = this.fillStar.bind(this);
    this.emptyStars = this.emptyStars.bind(this);
    this.handleStarSelect = this.handleStarSelect.bind(this);
    this.classNameGenerator = this.classNameGenerator.bind(this);
    this.handleAddToDefault = this.handleAddToDefault.bind(this);
    this.handleBookshelfSelect = this.handleBookshelfSelect.bind(this);
    this.toggleBookshelves = this.toggleBookshelves.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.review) {
      this.setState({review: props.review, score: props.review.score, starsFilled: props.review.score})
    }
  }

  handleRemove(event) {
    event.preventDefault();
    this.props.deleteBookshelfOwnership({bookshelfId: this.props.bookshelf.id, bookId: this.props.book.id});
  }

  classNameGenerator(score, starValue) {
    let className;
    if (score >= starValue) {
      className = 'star-filled';
    } else {
      className = 'star-empty';
    }
    if (this.state.canReview) {
      className = className.concat('-selectable');
    }
    return className;
  }

  fillStar(number) {
    return (event) => {
      if (this.state.canReview) {
        this.setState({starsFilled: number})
      }
    };
  }

  emptyStars(event) {
    this.setState({starsFilled: this.state.score})
  }

  handleStarSelect(score) {
    return (event) => {
      if (this.state.canReview) {
        if (this.state.review.id) {
          this.props.updateReview({id: this.state.review.id, score, body: this.state.review.body, userId: this.props.currentUserId, bookId: this.props.book.id});
        } else {
        this.props.createReview({score, body: '', userId: this.props.currentUserId, bookId: this.props.book.id});
        };
      }
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

  render() {
    let button;
    if (this.state.canReview && this.props.bookshelf) {
      button = (<button className="remove-book-button" onClick={this.handleRemove}>Remove book</button>);
    } else {
      const readStatus = this.state.readStatus || 'Want to Read';
      const bookClassName = this.state.onDefaultShelf ? 'on-default-shelf' : 'not-on-default-shelf';
      button = (
        <div className="book-full-button-container">
          <div className={`${bookClassName}-container`}>
            <span className={bookClassName} onClick={this.handleAddToDefault}>{readStatus}</span>
          </div>
          <button className="book-show-button" onClick={this.toggleBookshelves}>▼
          </button>
        </div>
      );
    }
    const reviewScore = this.props.review ? this.props.review.score : null;
    return (
      <tr>
        <td className="table-field-cover">
          <Link to={`/books/${this.props.book.id}`}>
            <img src={this.props.book.coverUrl} />
          </Link>
        </td>
        <td className="table-field-title">
          <Link to={`/books/${this.props.book.id}`}>{this.props.book.title}</Link>
        </td>
        <td className="table-field-author">{this.props.book.author}</td>
        <td className="table-field-avg-score">{this.props.book.avgScore}</td>
        <td className="table-field-score">
          <div className="review-header">
            <span className={this.classNameGenerator(this.state.starsFilled, 1)} onMouseEnter={this.fillStar(1)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(1)}></span>
            <span className={this.classNameGenerator(this.state.starsFilled, 2)} onMouseEnter={this.fillStar(2)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(2)}></span>
            <span className={this.classNameGenerator(this.state.starsFilled, 3)} onMouseEnter={this.fillStar(3)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(3)}></span>
            <span className={this.classNameGenerator(this.state.starsFilled, 4)} onMouseEnter={this.fillStar(4)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(4)}></span>
            <span className={this.classNameGenerator(this.state.starsFilled, 5)} onMouseEnter={this.fillStar(5)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(5)}></span>
          </div>
        </td>
        <td className="table-field-delete">
          {button}
        </td>
      </tr>
    );
  }
}

export default BookIndexItem;
