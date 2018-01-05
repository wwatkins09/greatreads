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

  componentWillUnmount() {
    this.props.clearBookshelfErrors();
  }

  handleUpdate(event) {
    event.preventDefault();
    let newBookshelf = Object.assign({}, this.props.bookshelf);
    newBookshelf.name = this.state.name;
    this.props.updateBookshelf(newBookshelf);
    this.state = {name: ""};
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

    //make headings links once urls exist!!
    return (
      <main className="bookshelf-show">
        <h3>{this.props.bookshelf.name}</h3>
        <table className="book-index-table">
          <tbody>
            <tr>
              <th className="table-field-cover">
                cover
              </th>
              <th className="table-field-title">title</th>
              <th className="table-field-author">author</th>
              <th className="table-field-avg-rating">avg rating</th>
              <th className="table-field-rating"></th>
              <th>rating</th>
            </tr>
            <tr>
              <td>
                Filler!!!
              </td>
            </tr>
          </tbody>

        </table>
        {bookshelfEdit}
        <ul className="bookshelf-errors-list">
          {errorsList}
        </ul>
        <div className="bookshelf-show-link">
          <Link  to={`/users/${this.props.bookshelf.userId}`}>Back to bookshelves!</Link>
        </div>
      </main>
    );
  }
}

export default withRouter(BookshelfShow);
