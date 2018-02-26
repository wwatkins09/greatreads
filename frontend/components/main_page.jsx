import {Route, Switch, withRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute}   from '../util/route_util.jsx';
import React from 'react';
import NewUserFormContainer from './user/new_user_form_container';
import UserShowContainer from './user/user_show_container';
import {connect} from 'react-redux';
import BookshelfShowContainer from './bookshelf/bookshelf_show_container';
import BookShowContainer from './book/book_show_container';
import BookIndexContainer from './book/book_index_container';
import SignInContainer from './session/sign_in_container';
import SignUpContainer from './user/sign_up_container';
import HomepageContainer from './homepage/homepage_container';
import About from './homepage/about';
import Contact from './homepage/contact';

const mapStateToProps = function (state) {
  return {
    currentUserId: state.session.currentUserId
  };
};


const MainPage = (props) => {
  let slashRoute;
  if (props.currentUserId) {
    slashRoute = (<Route exact path="/" component={UserShowContainer} />);
  } else {
    slashRoute = (<Route exact path="/" component={HomepageContainer} />);
  }
    return (
      <div className="main-page">
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {slashRoute}
        <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
        <ProtectedRoute exact path="/bookshelves/:bookshelfId" component={BookshelfShowContainer}/>
        <AuthRoute exact path="/signin" component={SignInContainer}/>
        <AuthRoute exact path="/signup" component={SignUpContainer}/>
        <Switch>
          <ProtectedRoute exact path="/books/:bookId" component={BookShowContainer}/>
          <ProtectedRoute exact path="/books" component={BookIndexContainer}/>
        </Switch>
      </div>
    );
};

export default withRouter(connect(mapStateToProps, null)(MainPage));
