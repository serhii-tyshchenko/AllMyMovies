/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable-next-line object-curly-newline */
import { createStore, applyMiddleware, compose } from 'redux';
import { ls } from 'services';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistedState = ls.loadState();
const composeTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeTools(applyMiddleware(thunk))
);
store.subscribe(() => {
  const { data, user, settings, searchResults } = store.getState();
  ls.saveState({
    data,
    searchResults,
    user,
    settings,
  });
});

export default store;
