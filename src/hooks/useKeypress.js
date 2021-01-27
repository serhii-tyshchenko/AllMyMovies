import { useEffect } from 'react';

function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) {
        action();
      }
    }
    console.log('mounted');
    window.addEventListener('keyup', onKeyup);
    return () => {
      console.log('unmounted');
      window.removeEventListener('keyup', onKeyup);
    };
  }, []);
}

export { useKeypress };
