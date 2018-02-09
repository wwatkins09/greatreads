import React from 'react';
import {Link} from 'react-router-dom';

class BookFullIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="book-full-row">
        <td className="book-full-number">{this.props.num}</td>
        <td className="book-full-cover">
          <Link to={`/books/${this.props.book.id}`}>
            <img src={this.props.book.coverUrl} />
          </Link>
        </td>
        <td className="book-full-info">
          <Link to={`/books/${this.props.book.id}`}>{this.props.book.title}</Link>
          <span>by {this.props.book.author}</span>
          <span>avg rating: {this.props.book.avgRating}</span>
        </td>
        <td className="book-full-button">BUTTON</td>
      </tr>
    );
  }
}

export default BookFullIndexItem;
