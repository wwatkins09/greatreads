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
    let bookList;
    if (this.state.input === "") {
      bookList = [];
    } else {
      bookList = Object.values(this.props.books).map((book) => {
        return (
          <SearchBarItem book={book} />
        );
      });
    }


    return (
      <div className="search-bar">
        <input onChange={this.handleChange} className="search-bar-input"></input>
        <content className="search-bar-list">
        </content>
      </div>
    );
  }

}

export default SearchBar;
