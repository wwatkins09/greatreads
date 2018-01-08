import {connect} from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../actions/book_actions';
import {fetchUserBookshelves} from '../../actions/bookshelf_actions';
import {createBookshelfOwnership, fetchBookshelfOwnershipsByBookshelfId} from '../../actions/bookshelf_ownership_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = function (state, ownProps) {
  let book = state.entities.books[ownProps.match.params.bookId];
  let userBookshelves;
    if (book) {
    } else {
      book = {id: null, title: "", author: "", year: null, average_score: null, coverUrl: ""};
    }
    if (state.entities.users[state.session.currentUserId]) {
      userBookshelves = state.entities.users[state.session.currentUserId].bookshelfIds.map((bookshelfId) => {
        return (
          state.entities.bookshelves[bookshelfId]
        );
      });
    }

  return {
    bookId: ownProps.match.params.bookId,
    book,
    currentUserId: state.session.currentUserId,
    userBookshelves
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
    fetchUserBookshelves: (userId) => dispatch(fetchUserBookshelves(userId)),
    createBookshelfOwnership: (bookshelfOwnership) => dispatch(createBookshelfOwnership(bookshelfOwnership)),
    fetchBookshelfOwnershipsByBookshelfId: (bookshelfId) => dispatch(fetchBookshelfOwnershipsByBookshelfId(bookshelfId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookShow));
