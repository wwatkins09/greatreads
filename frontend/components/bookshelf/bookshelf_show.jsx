import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import BookshelvesList from './bookshelves_list';
import BookIndexContainer from '../book/book_index_container';

class BookshelfShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: ""};
  }

  componentDidMount() {
    this.props.clearModals();
    this.props.fetchUserBookshelvesByBookshelfId(this.props.bookshelfId).then((payload) => {
      let userId = Object.keys(payload.user)[0];
      this.props.fetchReviewsByUserId(userId);
    }, () => {
      this.props.history.push("/")
    });
  }

  componentWillReceiveProps(props) {
    if (props.match.params.bookshelfId !== this.props.match.params.bookshelfId) {
      this.props.fetchUserBookshelvesByBookshelfId(props.match.params.bookshelfId).then((payload) => {
        let userId = Object.keys(payload.user)[0]
        this.props.fetchReviewsByUserId(userId)
      }, () => {
        this.props.history.push("/")
      });
    }
  }

  componentWillUnmount() {
    this.props.clearBookshelfErrors();
  }

  handleUpdate(event) {
    event.preventDefault();
    let newBookshelf = Object.assign({}, this.props.bookshelf);
    newBookshelf.name = this.state.name;
    this.props.updateBookshelf(newBookshelf);
    this.setState({name: ""});
  }

  handleDelete(event) {
    event.preventDefault();
    const userId = this.props.bookshelf.userId
    this.props.deleteBookshelf(this.props.bookshelf.id).then(() => this.props.history.push(`/users/${userId}`));
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  render() {
    let bookshelfEdit;
    if (this.props.currentUserId === this.props.bookshelf.userId && !this.props.bookshelf.defaultShelf) {
      bookshelfEdit = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <label>Change bookshelf name:
              <input type="text" onChange={this.handleChange} value={this.state.name}></input>
            </label>
            <input type="submit" className="bookshelf-edit-button" value="Edit"></input>
          </form>
          <button className="bookshelf-delete-button" onClick={this.handleDelete}>Delete Bookshelf</button>
        </div>
      );
    } else {
      bookshelfEdit = (<div></div>);
    }

    const errorsList = this.props.bookshelfErrors.map((error, idx) => {
      return (<li className="bookshelf-error" key={idx}>{error}</li>);
    });

    return (
      <div className="bookshelf-show">

        <content className="bookshelf-show-sidebar">
          <p className="bookshelf-show-sidebar-header">Bookshelves:</p>
          <ul>
            <BookshelvesList bookshelves={this.props.bookshelves}/>
          </ul>
        </content>

        <main className="bookshelf-show-main">
          <content className="bookshelf-show-header-container">
            <Link className="bookshelf-show-header user-name-link" to={`/users/${this.props.owner.id}`}>{this.props.owner.username}:</Link>
            <p className="bookshelf-show-header">{this.props.bookshelf.name}</p>
          </content>
          <BookIndexContainer bookshelf={this.props.bookshelf} reviews={this.props.reviews}></BookIndexContainer>
          {bookshelfEdit}
          <ul className="bookshelf-errors-list">
            {errorsList}
          </ul>
          <div className="bookshelf-show-link">
            <Link to={`/users/${this.props.bookshelf.userId}`}>Back to bookshelves</Link>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(BookshelfShow);
