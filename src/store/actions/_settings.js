import { db } from 'services';
import { GET_SETTINGS, UPDATE_SETTINGS, ERROR } from '../action-types';

function actionError(message) {
  return {
    type: ERROR,
    payload: message,
  };
}

export const getSettings = (uid) => (dispatch) => {
  db.getSettings(uid)
    .then((response) => {
      if (response.data()) {
        dispatch({ type: GET_SETTINGS, payload: response.data() });
      }
    })
    .catch((error) => dispatch(actionError(error.message)));
};

export const updateSettings = (uid, data) => (dispatch) => {
  if (uid) {
    db.updateSettings(uid, data)
      .then(() => dispatch({ type: UPDATE_SETTINGS, payload: data }))
      .catch((error) => dispatch(actionError(error.message)));
  } else {
    dispatch({ type: UPDATE_SETTINGS, payload: data });
  }
};
