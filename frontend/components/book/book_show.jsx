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
      <div className="book-show">

        <content className="book-show-image-column">
          <img src={this.props.book.coverUrl} alt="Cover"></img>
          <select defaultValue="want to read">
            <option value="want to read">Want to Read</option>
            <option value="reading">Currently Reading</option>
            <option value="read">Read</option>
          </select>
        </content>

        <main className="book-show-body">
          <p className="book-show-body-title">{this.props.book.title}</p>
          <p>by {this.props.book.author}</p>
        </main>
      </div>
    );
  }


}

export default BookShow;
