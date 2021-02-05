/* eslint-disable no-unused-vars */
import { db, api } from 'services';
import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  GET_ITEMS,
  SHOW_NOTIFICATION,
  SEARCH_MOVIE,
  API_REQUEST_STARTED,
  API_REQUEST_ENDED,
  DB_REQUEST_STARTED,
  DB_REQUEST_ENDED,
} from '../action-types';

function actionError(message) {
  return {
    type: SHOW_NOTIFICATION,
    payload: { type: 'error', message },
  };
}

export const searchMovie = (query) => (dispatch) => {
  dispatch({ type: API_REQUEST_STARTED });
  api
    .searchMovie(query)
    .then((data) => {
      if (data?.Search) {
        dispatch({ type: SEARCH_MOVIE, payload: data.Search });
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
