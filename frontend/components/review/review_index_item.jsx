import React from 'react';

class ReviewIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <p>{this.props.review.score}</p>
        <p>{this.props.review.body}</p>
      </li>
    );
  }

}

export default ReviewIndexItem;
