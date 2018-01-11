import merge from 'lodash/merge';
import {TOGGLE_REVIEW_MODAL, CLEAR_SEARCH_BAR, TOGGLE_SEARCH_BAR, CLEAR_MODALS} from '../actions/ui_actions';

const _nullState = {
  fullScreenModal: false,
  reviewModal: false,
  searchBar: false
};


const uiReducer = function (oldState = _nullState, action) {
  switch(action.type) {
    case TOGGLE_REVIEW_MODAL:
      return merge({}, {
        reviewModal: !oldState.reviewModal,
        fullScreenModal: !oldState.reviewModal,
        searchBar: false
      });
    case TOGGLE_SEARCH_BAR:
      return merge({}, oldState, {searchBar: true});
    case CLEAR_SEARCH_BAR:
      return merge({}, oldState, {searchBar: false});
    case CLEAR_MODALS:
      return merge({}, oldState, {reviewModal: false, fullScreenModal: false});
    default:
      return oldState;
  }
};


export default uiReducer;
