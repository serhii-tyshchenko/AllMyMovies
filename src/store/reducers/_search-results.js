/* eslint-disable default-param-last */
import { SEARCH_MOVIE, SIGN_OUT } from '../action-types';

const initialState = [];

export const searchResults = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_MOVIE:
      return [...payload];
    case SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};
