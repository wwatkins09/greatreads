import React from 'react';
import SearchBarItem from './search_bar_item';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {input: ''};

    this.handleChange = this.handleChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllBooks();
  }

  componentWillReceiveProps(props) {
    if (props.location.pathname !== this.props.location.pathname) {
      this.clearSearch();
    }
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  clearSearch() {
    this.setState({input: ''});
  }

  render() {
    let bookList = [];
    let booksExist = false;
    if (this.state.input.length > 0) {
      bookList = Object.values(this.props.books).map((book) => {
        if (book.title.toLowerCase().includes(this.state.input.toLowerCase())) {
          booksExist = true;
          return (
            <SearchBarItem book={book} key={book.id} clearSearch={this.clearSearch} />
          );
        }
      });
    }


    let bookListComponent = (booksExist) ? <ul className="search-bar-list">{bookList}</ul> : null;

    return (
      <div className="search-bar">
        <input onChange={this.handleChange} className="search-bar-input" value={this.state.input}></input>
        <div className="search-button-container">
          <button className="search-button"></button>
        </div>
          {bookListComponent}
      </div>
    );
  }

}

export default SearchBar;
