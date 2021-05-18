import firebase from 'firebase';
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDFwl87q4ZylcefdC8QO3GMARf04jQ_CYg",
    appId: "1:331192954662:web:4ee9e64f4465eb7789dbe7",
    authDomain: "katmandu-c6a24.firebaseapp.com",
    measurementId: "G-5J3DQ2QJTS",
    messagingSenderId: "331192954662",
    projectId: "katmandu-c6a24",
    storageBucket: "katmandu-c6a24.appspot.com",
});

export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app)