/* eslint-disable no-alert */
import { ERROR, REQUEST_ENDED, REQUEST_STARTED } from '../action-types';

const initialState = { error: '', isLoading: false };

export const api = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      alert(payload);
      return { ...state, error: payload };
    case REQUEST_STARTED:
      return { ...state, isLoading: true };
    case REQUEST_ENDED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
