import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'store';
import { ErrorBoundary } from 'components';
import { ModalContextProvider } from 'contexts/modal';

import './index.scss';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ErrorBoundary>
  </Provider>
);
