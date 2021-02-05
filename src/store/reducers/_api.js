/* eslint-disable no-alert */
import { ERROR, API_REQUEST_ENDED, API_REQUEST_STARTED } from '../action-types';

const initialState = { error: '', isLoading: false };

export const api = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      alert(payload);
      return { ...state, error: payload };
    case API_REQUEST_STARTED:
      return { ...state, isLoading: true };
    case API_REQUEST_ENDED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
