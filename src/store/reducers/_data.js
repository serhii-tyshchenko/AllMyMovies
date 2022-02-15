/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-case-declarations */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import { sortArrayOfObjects } from 'assets/utils';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  GET_ITEMS,
  SORT_MOVIES,
  UPDATE_ITEM,
  SIGN_OUT,
  REMOVE_LIST,
} from '../action-types';

const initialState = [];

export const data = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return [...state, payload];

    case UPDATE_ITEM:
      if (state.filter((item) => item.id === payload.id).length) {
        return state.map((item) =>
          item.id === payload.id ? { ...item, ...payload } : item
        );
      }
      return [...state, payload];

    case REMOVE_ITEM:
      return state.filter((item) => item.id !== payload);

    case REMOVE_LIST:
      const unfilteredMovies = state.filter(
        (movie) => !movie.lists.includes(payload)
      );
      const filteredMovies = state
        .filter((movie) => movie.lists.includes(payload))
        .map((movie) => ({
          ...movie,
          lists: movie.lists.filter((list) => list !== payload),
        }))
        .filter((movie) => movie.lists.length > 0);
      return [...unfilteredMovies, ...filteredMovies];

    case GET_ITEMS:
      return [...payload];

    case SORT_MOVIES:
      const [property, order] = payload.split('-');
      return sortArrayOfObjects(state, property, order);

    case SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};
