
import * as firebase from "firebase/app"
// import firebase from "firebase/app";
// import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAim4ZIBWUwp7jNH8r693AAtKgfLzn2G-k",
    authDomain: "ecma-51edd.firebaseapp.com",
    projectId: "ecma-51edd",
    storageBucket: "ecma-51edd.appspot.com",
    messagingSenderId: "427669403142",
    appId: "1:427669403142:web:d6a29ac5552cf24345f587"
};

export const app =  firebase.initializeApp(firebaseConfig);
 export const storage = getStorage();




