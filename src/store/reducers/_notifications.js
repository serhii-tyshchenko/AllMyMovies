import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  SIGN_OUT,
} from '../action-types';

const initialState = { type: '', message: '' };

export const notifications = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        type: action.payload.type,
        message: action.payload.message,
      };
    case HIDE_NOTIFICATION:
      return initialState;
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
