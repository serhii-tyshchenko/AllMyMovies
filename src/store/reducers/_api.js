/* eslint-disable default-param-last */
import {
  API_SEARCH_MOVIE_REQUEST_ENDED,
  API_SEARCH_MOVIE_REQUEST_STARTED,
  API_GET_MOVIE_INFO_REQUEST_STARTED,
  API_GET_MOVIE_INFO_REQUEST_ENDED,
  SIGN_OUT,
} from '../action-types';

const initialState = {
  error: '',
  isSearchMovieLoading: false,
  isGetMovieInfoLoading: false,
};

export const api = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case API_SEARCH_MOVIE_REQUEST_STARTED:
      return { ...state, isSearchMovieLoading: true };
    case API_SEARCH_MOVIE_REQUEST_ENDED:
      return { ...state, isSearchMovieLoading: false };
    case API_GET_MOVIE_INFO_REQUEST_STARTED:
      return { ...state, isGetMovieInfoLoading: true };
    case API_GET_MOVIE_INFO_REQUEST_ENDED:
      return { ...state, isGetMovieInfoLoading: false };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
