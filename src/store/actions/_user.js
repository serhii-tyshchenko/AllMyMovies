import { db, ls } from 'core/db';

import {
  SIGN_IN,
  SIGN_OUT,
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

function actionSignIn(response) {
  return {
    type: SIGN_IN,
    payload: {
      uid: response.user.uid,
      email: response.user.email,
    },
  };
}

export const signUpWithEmail = (email, password) => (dispatch) => {
  dispatch({ type: DB_REQUEST_STARTED });
  db.signUpWithEmail(email, password)
    .then((response) => dispatch(actionSignIn(response)))
    .catch((error) => dispatch(actionError(error.message)))
    .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
};

export const signInWithEmail = (email, password) => (dispatch) => {
  dispatch({ type: DB_REQUEST_STARTED });
  db.signInWithEmail(email, password)
    .then((response) => dispatch(actionSignIn(response)))
    .catch((error) => dispatch(actionError(error.message)))
    .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
};

export const signInWithGoogle = () => (dispatch) => {
  dispatch({ type: DB_REQUEST_STARTED });
  db.signInWithGoogle()
    .then((response) => dispatch(actionSignIn(response)))
    .catch((error) => dispatch(actionError(error.message)))
    .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
};

export const signOut = () => (dispatch) => {
  dispatch({ type: DB_REQUEST_STARTED });
  db.signOut()
    .then(() => dispatch({ type: SIGN_OUT }))
    .then(() => ls.clearState())
    .catch((error) => dispatch(actionError(error.message)))
    .finally(() => dispatch({ type: DB_REQUEST_ENDED }));
};
