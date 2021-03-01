/* eslint-disable object-curly-newline */
import { db, api } from 'services';
import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  REMOVE_LIST,
  GET_ITEMS,
  SORT_MOVIES,
  SHOW_NOTIFICATION,
  SEARCH_MOVIE,
  GET_MOVIE_INFO,
  API_REQUEST_STARTED,
  API_REQUEST_ENDED,
  DB_REQUEST_STARTED,
  DB_REQUEST_ENDED,
} from '../action-types';

function formatAPIResponse(data) {
  return {
    title: data.Title || '',
    type: data.Type,
    year: data.Year,
    genre: data.Genre || '',
    imdbID: data.imdbID,
    poster: data.Poster,
    actors: data.Actors || '',
    director: data.Director || '',
    country: data.Country || '',
    duration: data.Duration || '',
    release: data.Release || '',
    imdbRating: data.imdbRating || '',
    runtime: data.Runtime || '',
    plot: data.Plot || '',
  };
}

function actionError(message) {
  return { type: SHOW_NOTIFICATION, payload: { type: 'error', message } };
}

function actionRemoveList(list) {
  return { type: REMOVE_LIST, payload: list };
}

function actionSearchMovie(data) {
  return {
    type: SEARCH_MOVIE,
    payload: data.map((item) => formatAPIResponse(item)),
  };
}

function actionGetMovieInfo(data) {
  return { type: GET_MOVIE_INFO, payload: formatAPIResponse(data) };
}

export const searchMovie = (query) => (dispatch) => {
  dispatch({ type: API_REQUEST_STARTED });
  api
    .searchMovie(query)
    .then((data) => {
      if (data?.Search) {
        dispatch(actionSearchMovie(data.Search));
      } else {
        dispatch(actionError(data.Error));
      }
    })
    .catch((error) => dispatch(actionError(error.message)))
    .finally(() => dispatch({ type: API_REQUEST_ENDED }));
};

export const getMovieInfo = (id) => (dispatch) => {
  dispatch({ type: API_REQUEST_STARTED });
  api
    .getMovieInfo(id)
    .then((data) => {
      if (data) {
        dispatch(actionGetMovieInfo(data));
      } else {
        dispatch(actionError(data.Error));
      }
    })
    .catch((error) => dispatch(actionError(error.message)))
    .finally(() => dispatch({ type: API_REQUEST_ENDED }));
};

export const addItem = (uid, data) => (dispatch) => {
  if (uid) {
    dispatch({ type: DB_REQUEST_STARTED });
    db.addItem(uid, data)
      .then(() => dispatch({ type: ADD_ITEM, payload: data }))
      .catch((error) => dispatch(actionError(error.message)))
      .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
  } else {
    dispatch({ type: ADD_ITEM, payload: data });
  }
};

export const updateItem = (uid, data) => (dispatch) => {
  if (uid) {
    dispatch({ type: DB_REQUEST_STARTED });
    db.updateItem(uid, data)
      .then(() => dispatch({ type: UPDATE_ITEM, payload: data }))
      .catch((error) => dispatch(actionError(error.message)))
      .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
  } else {
    dispatch({ type: UPDATE_ITEM, payload: data });
  }
};

export const removeItem = (uid, id) => (dispatch) => {
  if (uid) {
    dispatch({ type: DB_REQUEST_STARTED });
    db.removeItem(uid, id)
      .then(() => dispatch({ type: REMOVE_ITEM, payload: id }))
      .catch((error) => dispatch(actionError(error.message)))
      .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
  } else {
    dispatch({ type: REMOVE_ITEM, payload: id });
  }
};

export const removeList = (uid, list) => (dispatch) => {
  if (uid) {
    dispatch({ type: DB_REQUEST_STARTED });
    db.removeList(uid, list)
      .then(() => dispatch(actionRemoveList(list)))
      .catch((error) => dispatch(actionError(error.message)))
      .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
  } else {
    dispatch(actionRemoveList(list));
  }
};

export const getItems = (uid) => (dispatch) => {
  dispatch({ type: DB_REQUEST_STARTED });
  db.getItems(uid)
    .then((response) => {
      const data = [];
      response.forEach((item) => data.push(item.data()));
      dispatch({ type: GET_ITEMS, payload: data });
    })
    .catch((error) => dispatch(actionError(error.message)))
    .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
};

export const sortMovies = (sortedBy) => ({
  type: SORT_MOVIES,
  payload: sortedBy,
});
