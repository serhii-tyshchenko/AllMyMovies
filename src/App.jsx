/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getSettings, searchMovie } from 'store/actions';
import { AuthModal } from 'components';
import { Home } from 'pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const { uid, isLogged } = useSelector((state) => state.user);
  const theme = useSelector((state) => state.settings.theme);
  document.documentElement.setAttribute('data-theme', theme);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogged) {
      dispatch(getItems(uid));
      dispatch(getSettings(uid));
    }
  });

  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
      <AuthModal />
    </div>
  );
}

export default App;
