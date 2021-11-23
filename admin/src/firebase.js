import firebase from 'firebase'
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyA4f828S77ZhDSo_Bz9HbPVcUjtbUb7peY",
    authDomain: "faces-5cf26.firebaseapp.com",
    projectId: "faces-5cf26",
    storageBucket: "faces-5cf26.appspot.com",
    messagingSenderId: "381986892028",
    appId: "1:381986892028:web:94f4adb965834e7ae5cf79",
    measurementId: "G-YX0DD4E84X"
};

firebase.initializeApp(config);
const db = firebase.firestore();
const fileupload = firebase.storage();
export {
        db,
        fileupload
}