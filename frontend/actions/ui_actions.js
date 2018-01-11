export const TOGGLE_REVIEW_MODAL = 'TOGGLE_REVIEW_MODAL';
export const TOGGLE_SEARCH_BAR = 'TOGGLE_SEARCH_BAR';
export const CLEAR_SEARCH_BAR = 'CLEAR_SEARCH_BAR';

export const toggleReviewModal = function() {
  return {
    type: TOGGLE_REVIEW_MODAL
  };
};

export const toggleSearchBar = function() {
  return {
    type: TOGGLE_SEARCH_BAR
  };
};

export const clearSearchBar = function() {
  return {
    type: CLEAR_SEARCH_BAR
  };
};
