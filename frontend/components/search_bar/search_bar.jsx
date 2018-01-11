import React from 'react';
import SearchBarItem from './search_bar_item';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {input: ""};

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllBooks();
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    let bookList = [];
    let booksExist = false;
    if (this.state.input.length > 0) {
      bookList = Object.values(this.props.books).map((book) => {
        if (book.title.toLowerCase().includes(this.state.input.toLowerCase())) {
          booksExist = true;
          return (
            <SearchBarItem book={book} key={book.id} />
          );
        }
      });
    }


    let bookListComponent = (booksExist) ? <ul className="search-bar-list">{bookList}</ul> : null;

    return (
      <div className="search-bar">
        <input onChange={this.handleChange} className="search-bar-input"></input>
          {bookListComponent}
      </div>
    );
  }

}

export default SearchBar;
