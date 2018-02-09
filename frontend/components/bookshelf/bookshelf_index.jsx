import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';
import BookshelvesList from './bookshelves_list';

class BookshelfIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(props) {
    if (props.location.pathname !== this.props.location.pathname) {
      this.props.fetchUserBookshelves(props.userId);
    }
  }

  componentWillUnmount() {
    this.props.clearBookshelfErrors();
  }

  handleCreate(event) {
    event.preventDefault();
    this.props.createBookshelf(this.state);
    this.setState({name: ''});
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  render() {
    let newBookshelfForm;
    if (this.props.currentUserId === this.props.userId) {
      newBookshelfForm = (
        <div>
          <form onSubmit={this.handleCreate}>
            <label>Add a new bookshelf:
              <input onChange={this.handleChange} type="text" value={this.state.name} placeholder="Bookshelf name"></input>
              <button className="add-bookshelf-button">Add</button>
            </label>
          </form>
        </div>
      );
    } else {
      newBookshelfForm = (<div></div>);
    }

    return (
      <main>
        <h3>Bookshelves:</h3>
        <ul>
          <BookshelvesList bookshelves={this.props.userBookshelves}/>
        </ul>
        {newBookshelfForm}
      </main>
    );
  }

}

export default BookshelfIndex;
