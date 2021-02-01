/* eslint-disable no-unused-vars */
import { api } from 'services';
import {
  ERROR,
  GET_MOVIE_INFO,
  REQUEST_STARTED,
  REQUEST_ENDED,
} from '../action-types';

function actionError(message) {
  return {
    type: ERROR,
    payload: message,
  };
}

export const getMovieInfo = (id) => (dispatch) => {
  dispatch({ type: REQUEST_STARTED });
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
    .finally(() => dispatch({ type: REQUEST_ENDED }));
};
