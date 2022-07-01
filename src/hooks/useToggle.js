import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => setState((prevState) => !prevState), []);

  return [state, toggle];
};

export default useToggle;
