import React from 'react';
import {Link} from 'react-router-dom';

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
    this.setState(props.bookshelf);
    this.setState({name: ""});
  }

  handleUpdate(event) {
    console.log(this.state);
    event.preventDefault();
    this.props.updateBookshelf(this.state);
  }

  handleDelete(event) {
    event.preventDefault();
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

export default BookshelfShow;
