import { createStore, applyMiddleware, compose } from 'redux';
import * as LS from 'services/db/ls';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistedState = LS.loadState();
const composeTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeTools(applyMiddleware(thunk))
);
store.subscribe(() => {
  const { data, user, settings } = store.getState();
  LS.saveState({
    data,
    user,
    settings,
  });
});

export default store;
