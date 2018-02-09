import React from 'react';
import {Link} from 'react-router-dom';

class BookFullIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddToDefault = this.handleAddToDefault.bind(this);
  }

  handleAddToDefault(event) {

  }

  toggleBookshelves(event) {

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
          <Link className="book-full-title" to={`/books/${this.props.book.id}`}>{this.props.book.title}</Link>
          <span className="book-full-author">by {this.props.book.author}</span>
          <span className="book-full-avg-score">avg rating: {this.props.book.avgScore}</span>
        </td>
        <td className="book-full-button">
          <div className="book-full-button-container">
            <div className="not-on-default-shelf-container">
              <span className="not-on-default-shelf" onClick={this.handleAddToDefault}>Want to Read</span>
            </div>
            <button className="book-show-button" onClick={this.toggleBookshelves}>▼
            </button>
          </div>

        </td>
      </tr>
    );
  }
}

export default BookFullIndexItem;
