import React from 'react';

class ReviewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userId: this.props.currentUserId, bookId: this.props.book.id, score: null, body: ""};

    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyChange(event) {
    this.setState({body: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();
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
            <input type="radio" name="score" value="1"></input>Didn't like it
          </label>
          <label className="radio">
            <input type="radio" name="score" value="2"></input>It was OK
          </label>
          <label className="radio">
            <input type="radio" name="score" value="3"></input>Liked it
          </label>
          <label className="radio">
            <input type="radio" name="score" value="4"></input>Really liked it
          </label>
          <label className="radio">
            <input type="radio" name="score" value="5"></input>It was amazing
          </label>
            <div className="review-modal-body">
              <p>What did you think?</p>
              <textarea onChange={this.handleBodyChange}>{this.state.body}</textarea>
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
