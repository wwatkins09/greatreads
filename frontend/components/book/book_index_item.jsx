import React from 'react';

class BookIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td className="table-field-cover">Cover</td>
        <td className="table-field-title">{this.props.book.title}</td>
        <td className="table-field-author">{this.props.book.author}</td>
        <td className="table-field-avg-score">{this.props.book.averageScore}</td>
      </tr>
    );
  }
}

export default BookIndexItem;
