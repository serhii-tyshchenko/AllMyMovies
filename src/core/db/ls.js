import { LS_KEY_NAME } from '../constants';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LS_KEY_NAME);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LS_KEY_NAME, serializedState);
  } catch {
    // eslint-disable-next-line no-console
    console.error('Unable to save to LS');
  }
};

export const clearState = () => localStorage.removeItem(LS_KEY_NAME);
