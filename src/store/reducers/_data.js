import {
  ADD_ITEM, REMOVE_ITEM, GET_ITEMS, UPDATE_ITEM, SIGN_OUT,
} from '../action-types';

const initialState = [];

export const data = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return [...state, payload];

    case UPDATE_ITEM:
      return state.map((item) => (item.id === payload.id ? { ...item, ...payload } : item));

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
