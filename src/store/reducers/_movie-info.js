/* eslint-disable default-param-last */
import { GET_MOVIE_INFO, SIGN_OUT } from '../action-types';

const initialState = {};

export const movieInfo = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIE_INFO:
      return { ...payload };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
