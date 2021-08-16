import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAKR_F_pWl8pOux_ZAiCT-3PLKI6JAgkHg",
    authDomain: "tesla-clone-cda6f.firebaseapp.com",
    projectId: "tesla-clone-cda6f",
    storageBucket: "tesla-clone-cda6f.appspot.com",
    messagingSenderId: "221192321137",
    appId: "1:221192321137:web:e8dab07468d9a8f3bd43d0",
    measurementId: "G-WLLJEVNZCT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };