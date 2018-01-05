import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import BookshelvesList from './bookshelves_list';

class BookshelfShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: ""};
  }

  componentDidMount() {
    this.props.fetchUserBookshelvesByBookshelfId(this.props.bookshelfId).then(() => {}, () => {
      this.props.history.push("/")
    });
  }

  componentWillReceiveProps(props) {
    if (props.match.params.bookshelfId !== this.props.match.params.bookshelfId) {
      this.props.fetchUserBookshelvesByBookshelfId(props.match.params.bookshelfId).then(() => {}, () => {
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
      <div className="bookshelf-show">

        <content className="bookshelf-show-sidebar">
          <p className="bookshelf-show-sidebar-header">Bookshelves:</p>
          <ul>
            <BookshelvesList bookshelves={this.props.bookshelves}/>
          </ul>
        </content>

        <main className="bookshelf-show-main">
          <content className="bookshelf-show-header-container">
            <Link className="bookshelf-show-header" to={`/users/${this.props.owner.id}`}>{this.props.owner.username}</Link>
            <p className="bookshelf-show-header"> > </p>
            <p className="bookshelf-show-header">Books: {this.props.bookshelf.name}</p>
          </content>
          <table className="book-index-table">
            <tbody>
              <tr>
                <th className="table-field-cover">
                  cover
                </th>
                <th className="table-field-title">title</th>
                <th className="table-field-author">author</th>
                <th className="table-field-avg-rating">avg rating</th>
                <th className="table-field-rating">rating</th>
              </tr>
              <tr>
                <td className="table-field-cover">cover1</td>
                <td className="table-field-title">title1</td>
                <td className="table-field-author">author1</td>
                <td className="table-field-avg-rating">avg rating1</td>
                <td className="table-field-rating">rating1</td>
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
      </div>
    );
  }
}

export default withRouter(BookshelfShow);
