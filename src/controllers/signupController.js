// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

var firebase = require("firebase/app");

const { getMultiFactorResolver } = require("firebase/auth");
const getDatabase = require("firebase/database");
// Add the Firebase products that you want to use
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
require("firebase/firestore");

const login = (req, res) => {
  const { email, password } = req.body;
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: proccess.env.storageBucket,
    messagingSenderId: proccess.env.messagingSenderId,
    appId: proccess.env.appId,
    measurementId: process.env.measurementId,
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = login;
