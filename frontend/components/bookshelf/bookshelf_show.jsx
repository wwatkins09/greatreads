import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';

class BookshelfShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: ""};
  }

  componentDidMount() {
    this.props.fetchBookshelf(this.props.bookshelfId);
  }

  componentWillReceiveProps(props) {
    if (props.match.params.bookshelfId !== this.props.match.params.bookshelfId) {
      this.props.fetchBookshelf(props.match.params.bookshelfId);
    }
  }

  handleUpdate(event) {
    event.preventDefault();
    const newBookshelf = Object.assign({}, this.props.bookshelf);
    newBookshelf.name = this.state.name;
    this.props.updateBookshelf(newBookshelf);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.history.push(`/users/${this.props.bookshelf.userId}`);
    this.props.deleteBookshelf(this.props.bookshelf.id);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  render() {
    let bookshelfEdit;
    if (this.props.currentUserId === this.props.bookshelf.userId) {
      bookshelfEdit = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <label>New bookshelf name:
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
    return (
      <main className="bookshelf-show">
        <p>{this.props.bookshelf.name}</p>
        <p>Books go here!</p>
        <div className="bookshelf-show-link">
          <Link  to={`/users/${this.props.bookshelf.userId}`}>Back</Link>
        </div>
        {bookshelfEdit}
      </main>
    );
  }
}

export default withRouter(BookshelfShow);
