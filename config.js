const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyAglwFqBAh6_rEBB_PL7p4U4Y6ScsRZQ7c",
    authDomain: "project-api-27748.firebaseapp.com",
    projectId: "project-api-27748",
    storageBucket: "project-api-27748.appspot.com",
    messagingSenderId: "1019722890731",
    appId: "1:1019722890731:web:cf87e85d6aebd6df30edae",
    measurementId: "G-GT2ELQ801E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const User = db.collection("Users")

module.exports = User;