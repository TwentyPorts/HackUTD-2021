// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  // omitted from repo
};

// if a Firebase instance doesn't exist, create one
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get a reference to the database service
export const db = firebase.database();

export default firebase;
