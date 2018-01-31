import React from 'react';

class ReviewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = (props.review ? props.review : {id: undefined,
      userId: this.props.currentUserId,
      bookId: this.props.bookId,
      score: 0,
      body: "",
      starsFilled: 0,
      empty: true
    });

    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.fillStar = this.fillStar.bind(this);
    this.emptyStars = this.emptyStars.bind(this);
    this.handleStarSelect = this.handleStarSelect.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.review) {
      this.setState(props.review);
      this.setState({starsFilled: props.review.score, empty: false})
    } else if (!props.review && !this.state.empty) {
      this.setState({id: undefined,
        userId: this.props.currentUserId,
        bookId: this.props.bookId,
        score: 0,
        body: "",
        starsFilled: 0,
        empty: true})
    }
  }

  handleScoreChange(event) {
    this.setState({score: event.currentTarget.value});
  }

  handleBodyChange(event) {
    if (event.currentTarget.value.length <= 1000) {
      this.setState({body: event.currentTarget.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearReviewErrors();
    if (this.state.id) {
      this.props.updateReview(this.state).then(() => this.props.toggleReviewModal());
    } else {
      this.props.createReview(this.state).then(() => {this.props.toggleReviewModal();
      });
    }
  }

  handleModalClose(event) {
    this.setState({score: '0', body: ''});
    this.props.clearReviewErrors();
    this.props.toggleReviewModal();
  }

  fillStar(number) {
    return (event) => {
      this.setState({starsFilled: number})
    };
  }

  emptyStars(event) {
    this.setState({starsFilled: this.state.score})
  }

  classNameGenerator(score, starValue) {
    if (score >= starValue) {
      return 'star-filled-selectable';
    } else {
      return 'star-empty-selectable';
    }
  }

  handleStarSelect(score) {
    return (event) => {
      this.setState({score})
    }
  }

  render() {
    let className = 'review-modal-hidden';
    if (this.props.toggled) {
      className = 'review-modal-not-hidden';
    }
    let errorsList = [];
    if (this.props.errors) {
      errorsList = this.props.errors.map((error, idx) => {
        return (<li className="review-error" key={idx}>{error}</li>);
      });
    }

    if (this.props.book) {
    return (
      <div className="review-modal">
        <main className={className}>
          <div className="review-modal-x-container">
            <p onClick={this.handleModalClose} className="review-modal-x">x</p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <p className="review-modal-title">{this.props.book.title}</p>
            <p className="review-modal-author">by {this.props.book.author}</p>
            <p className="review-modal-rating">My rating: </p>
            <div className="review-modal-stars">
              <span className={this.classNameGenerator(this.state.starsFilled, 1)} onMouseEnter={this.fillStar(1)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(1)}></span>
              <span className={this.classNameGenerator(this.state.starsFilled, 2)} onMouseEnter={this.fillStar(2)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(2)}></span>
              <span className={this.classNameGenerator(this.state.starsFilled, 3)} onMouseEnter={this.fillStar(3)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(3)}></span>
              <span className={this.classNameGenerator(this.state.starsFilled, 4)} onMouseEnter={this.fillStar(4)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(4)}></span>
              <span className={this.classNameGenerator(this.state.starsFilled, 5)} onMouseEnter={this.fillStar(5)} onMouseLeave={this.emptyStars} onClick={this.handleStarSelect(5)}></span>
            </div>
            <div className="review-modal-body">
              <p>What did you think? (optional)</p>
              <textarea onChange={this.handleBodyChange} value={this.state.body}></textarea>
            </div>
          <button className="review-submit-button">Submit review</button>
        </form>
        <ul className="review-errors">{errorsList}</ul>
      </main>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
  }


}

export default ReviewModal;
