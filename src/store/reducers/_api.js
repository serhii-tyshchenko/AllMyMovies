import {
  API_REQUEST_ENDED,
  API_REQUEST_STARTED,
  SIGN_OUT,
} from '../action-types';

const initialState = { error: '', isLoading: false };

export const api = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case API_REQUEST_STARTED:
      return { ...state, isLoading: true };
    case API_REQUEST_ENDED:
      return { ...state, isLoading: false };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
