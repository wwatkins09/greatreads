import React from 'react';

class ReviewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userId: this.props.currentUserId, bookId: this.props.book.id, body: ""};

    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({bookId: props.book.id});
  }

  handleScoreChange(event) {
    this.setState({score: event.currentTarget.value});
  }

  handleBodyChange(event) {
    this.setState({body: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearReviewErrors();
    this.props.createReview(this.state);
    this.props.toggleReviewModal();
  }

  handleModalClose(event) {
    this.setState({score: null, body: ''});
    this.props.clearReviewErrors();
    this.props.toggleReviewModal();
  }

  render() {
    let className = 'review-modal-hidden';
    if (this.props.toggled) {
      className = 'review-modal-not-hidden';
    }
    const errorsList = this.props.errors.map((error, idx) => {
      return (<li className="review-error" key={idx}>{error}</li>);
    });

    if (this.props.book) {
    return (
      <div className="review-modal">
        <main className={className}>
          <p onClick={this.handleModalClose} className="review-modal-x">x</p>
          <form onSubmit={this.handleSubmit}>
            <p className="review-modal-title">{this.props.book.title}</p>
            <p className="review-modal-author">by {this.props.book.author}</p>
            <p className="review-modal-rating">My rating: </p>
            <label className="radio">
            <input type="radio" name="score" value="1" checked={this.state.score === '1'} onChange={this.handleScoreChange} />Didn't like it
          </label>
          <label className="radio">
            <input type="radio" name="score" value="2" checked={this.state.score === '2'} onChange={this.handleScoreChange} />It was OK
          </label>
          <label className="radio">
            <input type="radio" name="score" value="3" checked={this.state.score === '3'} onChange={this.handleScoreChange} />Liked it
          </label>
          <label className="radio">
            <input type="radio" name="score" value="4" checked={this.state.score === '4'} onChange={this.handleScoreChange} />Really liked it
          </label>
          <label className="radio">
            <input type="radio" name="score" value="5" checked={this.state.score === '5'} onChange={this.handleScoreChange} />It was amazing
          </label>
            <div className="review-modal-body">
              <p>What did you think?</p>
              <textarea onChange={this.handleBodyChange} value={this.state.body}></textarea>
            </div>
          <button className="review-submit-button">Submit review!</button>
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
