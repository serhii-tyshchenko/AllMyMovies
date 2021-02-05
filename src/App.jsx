import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getSettings } from 'store/actions';
import { AuthModal, NotificationService } from 'components';
import { Home } from 'pages';
import {
  HashRouter as Router,
} from 'react-router-dom';

const App = () => {
  const { uid, isLogged } = useSelector((state) => state.user);
  const theme = useSelector((state) => state.settings.theme);
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
      <AuthModal />
      <NotificationService />
    </>
  );
};

export default App;
