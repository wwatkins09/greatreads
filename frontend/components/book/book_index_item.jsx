import React from 'react';
import {Link} from 'react-router-dom';

class BookIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(event) {
    event.preventDefault();
    this.props.deleteBookshelfOwnership({bookshelfId: this.props.bookshelf.id, bookId: this.props.book.id});
  }

  render() {
    let button;
    if (this.props.currentUserId === this.props.bookshelf.userId) {
      button = (<button className="remove-book-button" onClick={this.handleRemove}>Remove book</button>);
    }
    return (
      <tr>
        <td className="table-field-cover">
          <Link to={`/books/${this.props.book.id}`}>
            <img src={this.props.book.coverUrl} />
          </Link>
        </td>
        <td className="table-field-title">
          <Link to={`/books/${this.props.book.id}`}>{this.props.book.title}</Link>
        </td>
        <td className="table-field-author">{this.props.book.author}</td>
        <td className="table-field-score">score</td>
        <td className="table-field-delete">
          {button}
        </td>
      </tr>
    );
  }
}

export default BookIndexItem;
