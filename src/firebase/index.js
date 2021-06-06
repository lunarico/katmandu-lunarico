import firebase from 'firebase/app';
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
    appId: process.env.REACT_APP_FIRESTORE_APP_ID,
    authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
    measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENT_ID,
    messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
    projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
});

export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app)