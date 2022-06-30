import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'store';
import { ErrorBoundary } from 'components';

import App from './App';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);
