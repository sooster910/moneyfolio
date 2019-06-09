import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyAySQ_TthJLOPznZt36KnksOjKQeH8cCHk",
    authDomain: "expense-budget-app.firebaseapp.com",
    databaseURL: "https://expense-budget-app.firebaseio.com",
    projectId: "expense-budget-app",
    storageBucket: "expense-budget-app.appspot.com",
    messagingSenderId: "992485539146"
};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ 'prompt': 'select_account' });
export const auth = firebase.auth()
export default firebase