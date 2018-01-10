import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviewsByBookId(this.props.bookId);
  }

  componentWillReceiveProps(props) {
    if (props.location.pathname !== this.props.location.pathname) {
      this.props.fetchReviewsByBookId(props.bookId);
    }
  }

  handleDelete(event) {
    event.preventDefault();
    const currentUserReview = this.props.bookReviews.filter((review) => review.userId === this.props.currentUserId)[0]
    this.props.deleteReview(currentUserReview.id);
  }

  render() {

    let currentUserReview;

    const reviewsList = Object.values(this.props.bookReviews).map((review) => {
      if (review) {
        if (review.userId === this.props.currentUserId) {
          currentUserReview = review;
        } else {
        return (
            <ReviewIndexItem review={review} key={review.id} user={this.props.users[review.userId]} />
        );
      }
      }
    });
    let currentUserReviewEl;
    if (currentUserReview) {
      currentUserReviewEl = (
        <content className="review-current-user">
          <p>Your review:</p>
          <ReviewIndexItem review={currentUserReview} key={currentUserReview.id} user={this.props.users[this.props.currentUserId]} />
          <button className="review-delete-button" onClick={this.handleDelete}>Delete</button>
        </content>
      );
    }

    return (
      <div>
        {currentUserReviewEl}
        <ul className="reviews-list">
          {reviewsList}
        </ul>
      </div>
    );
  }

}

export default ReviewIndex;
