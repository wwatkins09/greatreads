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
          <p className="review-current-user-rated-it"> rated it: </p>
        <p className="review-score">{this.props.review.score}</p>
      </span>
      <p className="review-body">{this.props.review.body}</p>
      </li>
    );
  }

}

export default ReviewIndexItem;
