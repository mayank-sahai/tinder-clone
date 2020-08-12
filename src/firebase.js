const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBGn2UQ6a0TqpHVCFSsIM1-DkeAUJecBAU",
    authDomain: "tinder-clone-76752.firebaseapp.com",
    databaseURL: "https://tinder-clone-76752.firebaseio.com",
    projectId: "tinder-clone-76752",
    storageBucket: "tinder-clone-76752.appspot.com",
    messagingSenderId: "477269816079",
    appId: "1:477269816079:web:ff55f30d9db2a07b87447a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;