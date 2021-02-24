import firebase from 'firebase';
require('@firebase/firestore')
  
  
var firebaseConfig = {
  apiKey: "AIzaSyBstEWYJVTn-QYVX1z52RslQv5gW317GXs",
  authDomain: "wily-e4c33.firebaseapp.com",
  databaseURL: "https://wily-e4c33-default-rtdb.firebaseio.com",
  projectId: "wily-e4c33",
  storageBucket: "wily-e4c33.appspot.com",
  messagingSenderId: "688956378006",
  appId: "1:688956378006:web:d359bf6d2d5b163d1b6bb7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    export default firebase.firestore();
