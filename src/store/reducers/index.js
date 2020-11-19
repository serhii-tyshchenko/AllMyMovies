import { combineReducers } from 'redux';
import { data } from './_data';
import { user } from './_user';
import { error } from './_error';
import { settings } from './_settings';
import { modals } from './_modals';

const rootReducer = combineReducers({
  data,
  user,
  settings,
  error,
  modals,
});

export default rootReducer;
