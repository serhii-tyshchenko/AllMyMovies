import { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getSettings } from 'store/actions';
import { getUserId, getIsUserLogged, getAppTheme } from 'store/selectors';

import { NotificationService } from 'components';

import { Home } from 'pages';

import { ModalService } from 'services';

function App() {
  const uid = useSelector(getUserId);
  const isLogged = useSelector(getIsUserLogged);
  const theme = useSelector(getAppTheme);
  document.documentElement.setAttribute('data-theme', theme);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogged) {
      dispatch(getItems(uid));
      dispatch(getSettings(uid));
    }
  }, [isLogged]);

  return (
    <>
      <Router>
        <Home />
      </Router>
      <NotificationService />
      <ModalService />
    </>
  );
};

export default App;
