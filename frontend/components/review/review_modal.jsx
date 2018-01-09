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


        <button onClick={this.handleSubmit}>Submit review!</button>
      </div>
    );
  }


}

export default ReviewModal;
