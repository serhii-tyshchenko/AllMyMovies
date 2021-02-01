import { useEffect } from 'react';

function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) {
        action();
      }
    }
    window.addEventListener('keyup', onKeyup);
    return () => {
      window.removeEventListener('keyup', onKeyup);
    };
  }, []);
}

export { useKeypress };
