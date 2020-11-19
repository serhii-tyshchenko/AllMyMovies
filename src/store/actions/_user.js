import { db, ls } from 'services';
import { SIGN_IN, SIGN_OUT, ERROR } from '../action-types';

function actionError(message) {
  return {
    type: ERROR,
    payload: message,
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
  db.signUpWithEmail(email, password)
    .then((response) => dispatch(actionSignIn(response)))
    .catch((error) => dispatch(actionError(error.message)));
};

export const signInWithEmail = (email, password) => (dispatch) => {
  db.signInWithEmail(email, password)
    .then((response) => dispatch(actionSignIn(response)))
    .catch((error) => dispatch(actionError(error.message)));
};

export const signInWithGoogle = () => (dispatch) => {
  db.signInWithGoogle()
    .then((response) => dispatch(actionSignIn(response)))
    .catch((error) => dispatch(actionError(error.message)));
};

export const signOut = () => (dispatch) => {
  db.signOut()
    .then(() => dispatch({
      type: SIGN_OUT,
    }))
    .then(() => ls.clearState())
    .catch((error) => dispatch(actionError(error.message)));
};
