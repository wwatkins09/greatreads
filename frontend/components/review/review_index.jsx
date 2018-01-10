import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviewsByBookId(this.props.bookId);
  }

  componentWillReceiveProps(props) {
    if (props.location.pathname !== this.props.location.pathname) {
      this.props.fetchReviewsByBookId(props.bookId);
    }
  }

  render() {
    console.log(this.props.users);
    const reviewsList = Object.values(this.props.bookReviews).map((review) => {
      if (review) {
        return (
            <ReviewIndexItem review={review} key={review.id} user={this.props.users[review.userId]} />
        );
      }
    });


    return (
      <ul className="reviews-list">
        {reviewsList}
      </ul>
    );
  }

}

export default ReviewIndex;
