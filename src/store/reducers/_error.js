import { ERROR } from '../action-types';

const initialState = '';

export const error = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      alert(action.payload);
      return action.payload;

    default:
      return state;
  }
};
