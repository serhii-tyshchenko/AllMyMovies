import { GET_MOVIE_INFO } from '../action-types';

const initialState = {};

export const movieInfo = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIE_INFO:
      return { ...payload };

    default:
      return state;
  }
};
