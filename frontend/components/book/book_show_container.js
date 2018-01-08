import {connect} from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../actions/book_actions';
import {fetchUserBookshelves} from '../../actions/bookshelf_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = function (state, ownProps) {
  let book = state.entities.books[ownProps.match.params.bookId];
    if (book) {
    } else {
      book = {title: "", author: "", year: null, average_score: null, coverUrl: ""};
    }
    if (state.entities.users[state.session.currentUserId]) {
      
    }

  return {
    bookId: ownProps.match.params.bookId,
    book,
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
    fetchUserBookshelves: (userId) => dispatch(fetchUserBookshelves(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookShow));
