import { SIGN_IN, SIGN_OUT } from '../action-types';

const initialState = { uid: null, isLogged: false };

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { uid: action.payload.uid, email: action.payload.email, isLogged: true };

    case SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};
