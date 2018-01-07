import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.bookId);
  }

  componentWillReceiveProps(props) {
    if (props.match.params.bookId !== this.props.match.params.bookId) {
      this.props.fetchBook(props.match.params.bookId).then(() => {}, () => {
        this.props.history.push("/");
      });
    }
  }

  render() {
    return (
      <p>{this.props.book.title}</p>
    );
  }


}

export default BookShow;
