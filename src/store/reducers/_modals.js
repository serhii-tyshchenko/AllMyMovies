/* eslint-disable default-param-last */
import { SHOW_MODAL, HIDE_MODAL, SIGN_OUT } from '../action-types';

const initialState = {
  auth: { isVisible: false, data: null },
  fav: { isVisible: false, data: null },
};

export const modals = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        [payload.modalName]: {
          isVisible: true,
          data: payload.data,
        },
      };
    case HIDE_MODAL:
      return {
        ...state,
        [payload]: { isVisible: false },
      };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
