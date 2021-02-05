import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { ErrorBoundary } from 'components';
import { LocalizationProvider } from 'contexts';

import './index.scss';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <LocalizationProvider>
        <App />
      </LocalizationProvider>
    </ErrorBoundary>
  </Provider>, document.getElementById('root'),
);
