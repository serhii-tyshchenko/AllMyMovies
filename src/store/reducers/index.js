import { combineReducers } from 'redux';
import { data } from './_data';
import { movieInfo } from './_movie-info';
import { searchResults } from './_search-results';
import { user } from './_user';
import { api } from './_api';
import { settings } from './_settings';
import { notifications } from './_notifications';

const rootReducer = combineReducers({
  data,
  movieInfo,
  searchResults,
  user,
  settings,
  api,
  notifications,
});

export default rootReducer;
