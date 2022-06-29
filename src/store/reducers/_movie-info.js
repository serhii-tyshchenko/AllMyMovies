/* eslint-disable default-param-last */
import {
  GET_MOVIE_INFO,
  API_REQUEST_STARTED,
  API_REQUEST_ENDED,
  SIGN_OUT,
} from '../action-types';

const initialState = { data: {}, isLoading: false };

export const movieInfo = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIE_INFO:
      return { ...state, data: payload };
    case API_REQUEST_STARTED:
      return { ...state, isLoading: true };
    case API_REQUEST_ENDED:
      return { ...state, isLoading: false };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
