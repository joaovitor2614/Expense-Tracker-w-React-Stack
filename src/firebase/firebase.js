import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider()
const gitProvider = new firebase.auth.GithubAuthProvider()
firebase.auth().languageCode = 'it'

const database = firebase.database();

export { firebase, provider, gitProvider, database as default }