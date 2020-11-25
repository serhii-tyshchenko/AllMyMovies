import { SEARCH_MOVIE } from '../action-types';

const initialState = [];

export const searchResults = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_MOVIE:
      return [...payload];

    default:
      return state;
  }
};
