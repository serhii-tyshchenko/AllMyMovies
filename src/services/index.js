import firebaseService from './db/firebase';
import api from './api/omdb';
import * as ls from './db/ls';

const db = firebaseService;
export { db, ls, api };
