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
      return state.map((item) =>
        item.lists.includes(payload)
          ? { ...item, lists: item.lists.filter((list) => list !== payload) }
          : item
      );

    case GET_ITEMS:
      return [...payload];

    case SORT_MOVIES:
      switch (payload) {
        case 'title-asc':
          return sortArrayOfObjects(state, 'Title', 'asc');
        case 'title-dsc':
          return sortArrayOfObjects(state, 'Title', 'dsc');
        case 'year-asc':
          return sortArrayOfObjects(state, 'Year', 'asc');
        case 'year-dsc':
          return sortArrayOfObjects(state, 'Year', 'dsc');
        default:
          return state;
      }

    case SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};
