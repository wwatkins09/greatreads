import React from 'react';
import {Link} from 'react-router-dom';

class ReviewIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  classNameGenerator(score, starValue) {
    if (score >= starValue) {
      return 'star-filled';
    } else {
      return 'star-empty';
    }
  }

  render() {
    console.log(this.props.review.score);
    const username = (this.props.user ? this.props.user.username : "");
    return (
      <li className="review-all">
        <span className="review-header">
          <div className="review-user-name">
            <Link to={`/users/${this.props.review.userId}`}>{username}</Link>
          </div>
          <div className="review-current-user-rated-it">
            <p> rated it: </p>
          </div>
        <div className="review-score">
          <span className={this.classNameGenerator(this.props.review.score, 1)}></span>
          <span className={this.classNameGenerator(this.props.review.score, 2)}></span>
          <span className={this.classNameGenerator(this.props.review.score, 3)}></span>
          <span className={this.classNameGenerator(this.props.review.score, 4)}></span>
          <span className={this.classNameGenerator(this.props.review.score, 5)}></span>


        </div>
      </span>
      <p className="review-body">{this.props.review.body}</p>
      </li>
    );
  }

}

export default ReviewIndexItem;
