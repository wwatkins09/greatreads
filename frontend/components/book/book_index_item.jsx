import React from 'react';
import {Link} from 'react-router-dom';

class BookIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
        <td className="table-field-avg-score">{this.props.book.averageScore}</td>
      </tr>
    );
  }
}

export default BookIndexItem;
