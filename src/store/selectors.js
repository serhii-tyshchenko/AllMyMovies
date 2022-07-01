/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { createSelector } from 'reselect';

const getData = (state) => state.data;
const getIsUserLogged = (state) => state.user.isLogged;
const getUserId = (state) => state.user.uid;
const getIsAuthModalVisible = (state) => state.modals.auth.isVisible;
const getIsFavModalVisible = (state) => state.modals.fav.isVisible;
const getAppLanguage = (state) => state.settings.language;
const getAppTheme = (state) => state.settings.theme;
const getUserLists = (state) => state.settings.userLists;
const getSearchResults = (state) => state.searchResults;
const getMovieInfo = (state) => state.movieInfo;
const getNotifications = (state) => state.notifications;
const getApiState = (state) => state.api;

const findById = (data, id) => data.find((item) => item.imdbID === id);

const getMovieById = createSelector(getData, (_, id) => id, findById);
const getSearchResultById = createSelector(
  getSearchResults,
  (_, id) => id,
  findById
);

const getMoviesByList = createSelector(
  getData,
  (_, list) => list,
  (data, list) => data.filter((item) => item?.lists.includes(list))
);

export {
  getData,
  getIsUserLogged,
  getIsAuthModalVisible,
  getIsFavModalVisible,
  getAppLanguage,
  getAppTheme,
  getUserLists,
  getSearchResults,
  getUserId,
  getMovieInfo,
  getNotifications,
  getMovieById,
  getSearchResultById,
  getMoviesByList,
  getApiState,
};
