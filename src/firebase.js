import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTkhTehp2BQ1XLH7W62oLYYL9GxpQjpAs",
    authDomain: "slack-clone-88652.firebaseapp.com",
    projectId: "slack-clone-88652",
    storageBucket: "slack-clone-88652.appspot.com",
    messagingSenderId: "907583345918",
    appId: "1:907583345918:web:91886bfe67d8e526cd81af"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export default db;
  export {auth, provider};