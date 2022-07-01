/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const _rootCollection = 'data';
const _dataCollection = 'movies';
const _settingsCollection = 'settings';
const _commonSettingsDoc = 'common';

const signInWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

const signUpWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

const signInWithGoogle = () =>
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const signOut = () => auth.signOut();

const addItem = (userID, item, dataCollection = _dataCollection) =>
  db
    .collection(_rootCollection)
    .doc(userID)
    .collection(dataCollection)
    .doc(item.id)
    .set(item);

const updateItem = (userID, data, dataCollection = _dataCollection) =>
  db
    .collection(_rootCollection)
    .doc(userID)
    .collection(dataCollection)
    .doc(data.id)
    .set(data, { merge: true });

const removeItem = (userID, itemId, dataCollection = _dataCollection) =>
  db
    .collection(_rootCollection)
    .doc(userID)
    .collection(dataCollection)
    .doc(itemId)
    .delete();

const getItems = (userID, dataCollection = _dataCollection) =>
  db.collection(_rootCollection).doc(userID).collection(dataCollection).get();

const getSettings = (userID) =>
  db
    .collection(_rootCollection)
    .doc(userID)
    .collection(_settingsCollection)
    .doc(_commonSettingsDoc)
    .get();

const updateSettings = (userID, data) =>
  db
    .collection(_rootCollection)
    .doc(userID)
    .collection(_settingsCollection)
    .doc(_commonSettingsDoc)
    .set(data, { merge: true });

const removeList = (userID, list) =>
  db
    .collection(_rootCollection)
    .doc(userID)
    .collection(_dataCollection)
    .where('lists', 'array-contains', list)
    .get()
    .then((querySnapshot) => {
      const batch = db.batch();
      querySnapshot.forEach((doc) => {
        const updatedLists = doc.data().lists.filter((item) => item !== list);
        if (updatedLists.length > 0) {
          batch.update(doc.ref, {
            lists: updatedLists,
          });
        } else {
          batch.delete(doc.ref);
        }
      });
      return batch.commit();
    });

export {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
  signOut,
  addItem,
  updateItem,
  removeItem,
  getItems,
  getSettings,
  updateSettings,
  removeList,
};
