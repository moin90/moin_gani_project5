import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCOAhVflHxnX46MY2K-2OOAVyuv0LHcVVU",
    authDomain: "project-5-getdo.firebaseapp.com",
    databaseURL: "https://project-5-getdo.firebaseio.com",
    projectId: "project-5-getdo",
    storageBucket: "project-5-getdo.appspot.com",
    messagingSenderId: "498146112856"
};
firebase.initializeApp(config);

export default firebase;
