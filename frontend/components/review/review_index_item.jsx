import React from 'react';
import {Link} from 'react-router-dom';

class ReviewIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const username = (this.props.user ? this.props.user.username : "");
    return (
      <li className="review-all">
        <span className="review-header">
          <div className="review-user-name">
            <Link to={`/users/${this.props.review.userId}`}>{username}</Link>
          </div>
          <p> rated it: </p>
        <p className="review-score">{this.props.review.score}</p>
      </span>
      <p>{this.props.review.body}</p>
      </li>
    );
  }

}

export default ReviewIndexItem;
