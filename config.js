
import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyBBQId-1x9-81IWRcXNU-ixYXlnG8eB8mE",
  authDomain: "demo2-38bce.firebaseapp.com",
  databaseURL: "https://demo2-38bce.firebaseio.com",
  projectId: "demo2-38bce",
  storageBucket: "demo2-38bce.appspot.com",
  messagingSenderId: "644929547939",
  appId: "1:644929547939:web:42f87e1c0bd1ba05e5d916"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);  
  
  export default firebase.firestore();