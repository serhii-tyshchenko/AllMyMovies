import { GET_SETTINGS, UPDATE_SETTINGS } from '../action-types';

const initialState = { language: 'en', theme: 'light' };

export const settings = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SETTINGS:
      return { ...payload };

    case UPDATE_SETTINGS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
