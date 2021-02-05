/* eslint-disable no-unused-vars */
import { api } from 'services';
import {
  SHOW_NOTIFICATION,
  GET_MOVIE_INFO,
  API_REQUEST_STARTED,
  API_REQUEST_ENDED,
} from '../action-types';

function actionError(message) {
  return {
    type: SHOW_NOTIFICATION,
    payload: { type: 'error', message },
  };
}

export const getMovieInfo = (id) => (dispatch) => {
  dispatch({ type: API_REQUEST_STARTED });
  api
    .getMovieInfo(id)
    .then((data) => {
      if (data) {
        dispatch({ type: GET_MOVIE_INFO, payload: data });
      } else {
        dispatch(actionError(data.Error));
      }
    })
    .catch((error) => dispatch(actionError(error.message)))
    .finally(() => dispatch({ type: API_REQUEST_ENDED }));
};
