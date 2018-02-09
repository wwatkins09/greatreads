import React from 'react';
import {Link} from 'react-router-dom';

class BookFullIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {toggled: false}

    this.handleAddToDefault = this.handleAddToDefault.bind(this);
    this.toggleBookshelves = this.toggleBookshelves.bind(this);
    this.handleBookshelfSelect = this.handleBookshelfSelect.bind(this);
  }

  componentWillReceiveProps(props) {
    if (!props.toggled) {
      this.setState({toggled: props.toggled});
    }
  }


  handleAddToDefault(event) {

  }

  handleBookshelfSelect(event) {

  }

  toggleBookshelves(event) {
    this.props.toggleBookshelfModal();
    this.setState({toggled: !this.state.toggled})
  }

  render() {
    const sortBookshelf = function (bookshelf1, bookshelf2) {
      return bookshelf1.id - bookshelf2.id;
    };

    let toggleMenu = (
      <ul className={toggleMenuClass}/>
    );
    let toggleMenuClass = this.state.toggled ? "book-show-toggle-list" : "book-show-toggle-list-hidden";
    if (this.state.toggled) {
      const toggleMenuItems = this.props.userBookshelves.sort(sortBookshelf).map((bookshelf) => {
        if (bookshelf) {
          return (
            <li className="book-show-toggle-list-item" onClick={this.handleBookshelfSelect(bookshelf)} key={bookshelf.id}>{bookshelf.name}</li>
          );
        }
      });
      toggleMenu = (
        <ul className={toggleMenuClass}>
          {toggleMenuItems}
        </ul>
      );
    }

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
            {toggleMenu}
          </div>

        </td>
      </tr>
    );
  }
}

export default BookFullIndexItem;
