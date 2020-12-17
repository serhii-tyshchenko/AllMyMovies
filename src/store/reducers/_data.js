/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import {
  ADD_ITEM,
  REMOVE_ITEM,
  GET_ITEMS,
  UPDATE_ITEM,
  SIGN_OUT,
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

    case GET_ITEMS:
      return [...payload];

    case SIGN_OUT:
      return [];

    default:
      return state;
  }
};
