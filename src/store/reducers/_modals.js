import { SHOW_MODAL, HIDE_MODAL } from '../action-types';

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
        [payload.modalName]: { isVisible: false, data: payload.data },
      };
    default:
      return state;
  }
};
