import React from 'react';
import {Link} from 'react-router-dom';

class BookshelfIndexItem extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {
    return (
      <li key={this.props.bookshelf.id}>
        <Link className="bookshelf-link" to={`/bookshelves/${this.props.bookshelf.id}`}>{this.props.bookshelf.name} ({this.props.bookshelf.bookIds.length})</Link>
      </li>
    );
  }

}

export default BookshelfIndexItem;
