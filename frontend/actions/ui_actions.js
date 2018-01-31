export const TOGGLE_REVIEW_MODAL = 'TOGGLE_REVIEW_MODAL';
export const TOGGLE_SEARCH_BAR = 'TOGGLE_SEARCH_BAR';
export const CLEAR_SEARCH_BAR = 'CLEAR_SEARCH_BAR';
export const CLEAR_MODALS = 'CLEAR_MODALS';
export const CLEAR_BOOKSHELF_MODAL = 'CLEAR_BOOKSHELF_MODAL';
export const TOGGLE_BOOKSHELF_MODAL = 'TOGGLE_BOOKSHELF_MODAL';

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

export const clearModals = function() {
  return {
    type: CLEAR_MODALS
  };
};

export const clearBookshelfModal = function() {
  return {
    type: CLEAR_BOOKSHELF_MODAL
  };
};

export const toggleBookshelfModal = function() {
  return {
    type: TOGGLE_BOOKSHELF_MODAL
  };
};
