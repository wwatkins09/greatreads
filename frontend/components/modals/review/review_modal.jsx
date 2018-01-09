import React from 'react';

class ReviewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userId: this.props.currentUserId, bookId: this.props.book.id, score: null, body: ""};

    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({bookId: props.book.id});
  }

  handleScoreChange(event) {
    event.preventDefault();
    this.setState({score: event.currentTarget.value});
  }

  handleBodyChange(event) {
    event.preventDefault();
    this.setState({body: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createReview(this.state);
  }

  render() {
    if (this.props.book) {

    return (
      <div className="review-modal">
        <main className="review-modal-content">
          <form onSubmit={this.handleSubmit}>
            <p className="review-modal-title">{this.props.book.title}</p>
            <p className="review-modal-author">by {this.props.book.author}</p>
            <p className="review-modal-rating">My rating: </p>
            <label className="radio">
            <input type="radio" name="score" value="1" onChange={this.handleScoreChange}></input>Didn't like it
          </label>
          <label className="radio">
            <input type="radio" name="score" value="2" onChange={this.handleScoreChange}></input>It was OK
          </label>
          <label className="radio">
            <input type="radio" name="score" value="3" onChange={this.handleScoreChange}></input>Liked it
          </label>
          <label className="radio">
            <input type="radio" name="score" value="4" onChange={this.handleScoreChange}></input>Really liked it
          </label>
          <label className="radio">
            <input type="radio" name="score" value="5" onChange={this.handleScoreChange}></input>It was amazing
          </label>
            <div className="review-modal-body">
              <p>What did you think?</p>
              <textarea onChange={this.handleBodyChange} value={this.state.body}></textarea>
            </div>
          <button>Submit review!</button>
        </form>
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
