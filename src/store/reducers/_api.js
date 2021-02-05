import { API_REQUEST_ENDED, API_REQUEST_STARTED } from '../action-types';

const initialState = { error: '', isLoading: false };

export const api = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case API_REQUEST_STARTED:
      return { ...state, isLoading: true };
    case API_REQUEST_ENDED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
