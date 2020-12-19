import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC71RkQFwu0P4Rvw1WqNMy2nKrrB2DWzW0",
  authDomain: "simbafileuploading.firebaseapp.com",
  databaseURL: "https://simbafileuploading.firebaseio.com",
  projectId: "simbafileuploading",
  storageBucket: "simbafileuploading.appspot.com",
  messagingSenderId: "150891659356",
  appId: "1:150891659356:web:8e1a17788e98cbe0376699",
  measurementId: "G-3Y7SY33K3Q"
};

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  
  export { storage, firebase as default };