import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import defaultConfig from './defaultConfig';
// Replace this with your own config details
var config = {
    
    apiKey:defaultConfig.API_KEY,
    authDomain: defaultConfig.authDomain,
    databaseURL: defaultConfig.databaseURL,
    projectId: defaultConfig.projectId,
    storageBucket: defaultConfig.storageBucket,
    messagingSenderId: defaultConfig.messagingSenderId
};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ 'prompt': 'select_account' });
export const auth = firebase.auth()
export default firebase