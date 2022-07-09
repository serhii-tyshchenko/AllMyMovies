import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'store';
import { ErrorBoundary } from 'components/molecules';
import { ModalContextProvider } from 'contexts/modal';
import { APP_ROOT } from 'core/constants';

import './index.scss';

import App from './App';

const root = createRoot(APP_ROOT);

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ErrorBoundary>
  </Provider>
);
