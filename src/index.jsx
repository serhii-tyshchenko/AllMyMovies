import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { LocalizationProvider } from 'contexts';

import './index.scss';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  </Provider>,
  document.getElementById('root'),
);
