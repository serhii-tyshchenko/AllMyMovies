import { db } from 'services';
import {
  GET_SETTINGS,
  UPDATE_SETTINGS,
  SHOW_NOTIFICATION,
  DB_REQUEST_STARTED,
  DB_REQUEST_ENDED,
} from '../action-types';

function actionError(message) {
  return {
    type: SHOW_NOTIFICATION,
    payload: { type: 'error', message },
  };
}

export const getSettings = (uid) => (dispatch) => {
  dispatch({ type: DB_REQUEST_STARTED });
  db.getSettings(uid)
    .then((response) => {
      if (response.data()) {
        dispatch({ type: GET_SETTINGS, payload: response.data() });
      }
    })
    .catch((error) => dispatch(actionError(error.message)))
    .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
};

export const updateSettings = (uid, data) => (dispatch) => {
  if (uid) {
    dispatch({ type: DB_REQUEST_STARTED });
    db.updateSettings(uid, data)
      .then(() => dispatch({ type: UPDATE_SETTINGS, payload: data }))
      .catch((error) => dispatch(actionError(error.message)))
      .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
  } else {
    dispatch({ type: UPDATE_SETTINGS, payload: data });
  }
};
