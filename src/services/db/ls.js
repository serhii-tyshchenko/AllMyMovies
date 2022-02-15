const keyName = process.env.REACT_APP_NAME;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(keyName);
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
    localStorage.setItem(keyName, serializedState);
  } catch {
    console.log('Unable to save to LS');
  }
};

export const clearState = () => {
  localStorage.removeItem(keyName);
};
