import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCQlb_obXIq5dWpJBy-5yNipn3PZ72Y5IA",
    authDomain: "tinder-clone-31640.firebaseapp.com",
    databaseURL: "https://tinder-clone-31640.firebaseio.com",
    projectId: "tinder-clone-31640",
    storageBucket: "tinder-clone-31640.appspot.com",
    messagingSenderId: "785307393549",
    appId: "1:785307393549:web:95da4ba97acedb03ce3f44"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

 const database = firebaseApp.firestore();

 export default database;