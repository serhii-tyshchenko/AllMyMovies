/* eslint-disable max-len */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();

    this.rootCollection = 'data';
    this.settingsCollection = 'settings';
    this.dataCollection = 'shopping-list';
    this.commonSettingsDoc = 'common';
  }

    signInWithEmail = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signUpWithEmail = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    signInWithGoogle = () => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

    signOut = () => this.auth.signOut();

    addItem = (userID, item, dataCollection = this.dataCollection) => this.db
      .collection(this.rootCollection)
      .doc(userID)
      .collection(dataCollection)
      .doc(item.id)
      .set(item);

    updateItem = (userID, data, dataCollection = this.dataCollection) => this.db
      .collection(this.rootCollection)
      .doc(userID)
      .collection(dataCollection)
      .doc(data.id)
      .set(data, { merge: true });

    removeItem = (userID, itemId, dataCollection = this.dataCollection) => this.db
      .collection(this.rootCollection)
      .doc(userID)
      .collection(dataCollection)
      .doc(itemId)
      .delete();

    getItems = (userID, dataCollection = this.dataCollection) => this.db
      .collection(this.rootCollection)
      .doc(userID)
      .collection(dataCollection)
      .get();

    getSettings = (userID) => this.db
      .collection(this.rootCollection)
      .doc(userID)
      .collection(this.settingsCollection)
      .doc(this.commonSettingsDoc)
      .get();

    updateSettings = (userID, data) => this.db
      .collection(this.rootCollection)
      .doc(userID)
      .collection(this.settingsCollection)
      .doc(this.commonSettingsDoc)
      .set(data, { merge: true });
}

export default new Firebase();
