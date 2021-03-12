import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDy4LaM4XTMn3PEBGAubB3pQvjymoiXTJQ",
    authDomain: "slack-clone-b635a.firebaseapp.com",
    databaseURL: "https://slack-clone-b635a.firebaseio.com",
    projectId: "slack-clone-b635a",
    storageBucket: "slack-clone-b635a.appspot.com",
    messagingSenderId: "152625799049",
    appId: "1:152625799049:web:f5b33ba3b02966e7454b58",
    measurementId: "G-G085X7CFM2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;