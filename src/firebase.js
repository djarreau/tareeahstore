import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
} from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const bucket = app.storage();

export {
    auth,
    db,
    bucket,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
};
export default app;
