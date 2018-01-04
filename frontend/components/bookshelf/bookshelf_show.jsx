import React from 'react';
import {Link} from 'react-router-dom';

class BookshelfShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBookshelf(this.props.bookshelfId);
  }

  render() {
    return (
      <main>
        Books go here!
        <Link to={`/users/${this.props.bookshelf.user_id}`}>Back</Link>
      </main>
    );
  }
}

export default BookshelfShow;
