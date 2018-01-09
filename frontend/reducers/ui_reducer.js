import merge from 'lodash/merge';
import {TOGGLE_REVIEW_MODAL} from '../actions/ui_actions';

const _nullState = {
  fullScreenModal: false,
  reviewModal: false
};


const uiReducer = function (oldState = _nullState, action) {
  switch(action.type) {
    case TOGGLE_REVIEW_MODAL:
      return merge({}, {
        reviewModal: !oldState.reviewModal,
        fullScreenModal: !oldState.reviewModal
      });
    default:
      return oldState;
  }
};


export default uiReducer;
