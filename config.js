import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAyQDOTzY_XEFhs7jIFcT-z6P5HcS1TZS8",
  authDomain: "e-ride-app-c2771.firebaseapp.com",
  projectId: "e-ride-app-c2771",
  storageBucket: "e-ride-app-c2771.appspot.com",
  messagingSenderId: "413400296479",
  appId: "1:413400296479:web:b9bd2f967fff82ebe9792a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
