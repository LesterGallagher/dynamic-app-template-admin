import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // <- needed if using firestore
import 'firebase/functions' // <- needed if using httpsCallable

var firebaseConfig = {
    apiKey: "AIzaSyCaS8dXhdbJcUcYQIdyIyXdNZYCWkzpxrk",
    authDomain: "dynamic-template-app.firebaseapp.com",
    databaseURL: "https://dynamic-template-app.firebaseio.com",
    projectId: "dynamic-template-app",
    storageBucket: "dynamic-template-app.appspot.com",
    messagingSenderId: "420758845304",
    appId: "1:420758845304:web:394c65df279b8c73"
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
firebase.functions() // <- needed if using httpsCallable

export default firebase;

