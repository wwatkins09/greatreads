import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions.js';

const _nullUser = {
  currentUserId: null
};

const sessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUserId = action.currentUser.id;
      return merge({}, { currentUserId });
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
