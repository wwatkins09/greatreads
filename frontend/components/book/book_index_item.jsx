import React from 'react';

class BookIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
      </tr>
    );
  }
}

export default BookIndexItem;
