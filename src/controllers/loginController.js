// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

var firebase = require("firebase/app");
// Add the Firebase products that you want to use
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { ref, set } = require("firebase/firestore");
require("dotenv");
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
  ref("user/").set("email");

  let result;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      result = userCredential.user;
      res.json({ accessToken: result.accessToken });
      // ...
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
};

module.exports = login;
