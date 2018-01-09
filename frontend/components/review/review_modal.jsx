import React from 'react';

class ReviewModal extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="review-modal">
        <p className="review-modal-title">{this.props.book.title}</p>
        <p className="review-modal-author">by {this.props.book.author}</p>
        <p className="review-modal-rating">My rating: </p>
        <p className="review-modal-body">What did you think?</p>

        <button onClick={this.handleSubmit}>Submit review!</button>
      </div>
    );
  }


}

export default ReviewModal;
