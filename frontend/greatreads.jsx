import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { entities: { users: {[window.currentUser.user.id]: window.currentUser.user} }, session: { currentUserId: window.currentUser.user.id } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
