import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';

class BookshelfIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    console.log("working");
    this.props.fetchUserBookshelves(this.props.userId);
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
    let bookshelvesList;
    if (this.props.userBookshelves) {
      bookshelvesList = this.props.userBookshelves.map((bookshelf) => {
        if (bookshelf) {
          return (<BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} />);
        }
      });
    }

    let newBookshelfForm;
    if (this.props.currentUserId === this.props.userId) {
      newBookshelfForm = (
        <div>
          <p>Add a bookshelf:</p>
          <form onSubmit={this.handleCreate}>
            <label>Name:
              <input onChange={this.handleChange} type="text" value={this.state.name}></input>
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
          {bookshelvesList}
        </ul>
        {newBookshelfForm}
      </main>
    );
  }

}

export default BookshelfIndex;
