// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import 'firebase/database';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC-E_-CX6hM_mHOCowCYME2DDWhk1EZrdE",
//   authDomain: "reactapp-4d443.firebaseapp.com",
//   projectId: "reactapp-4d443",
//   storageBucket: "reactapp-4d443.appspot.com",
//   messagingSenderId: "838052822810",
//   appId: "1:838052822810:web:48f953915877719758f6a3",
//   databaseURL: 'https://reactapp-4d443-default-rtdb.europe-west1.firebasedatabase.app/'
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



// export default database =firebase.database();

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-E_-CX6hM_mHOCowCYME2DDWhk1EZrdE",
    authDomain: "reactapp-4d443.firebaseapp.com",
    projectId: "reactapp-4d443",
    storageBucket: "reactapp-4d443.appspot.com",
    messagingSenderId: "838052822810",
    appId: "1:838052822810:web:48f953915877719758f6a3",
    databaseURL: 'https://reactapp-4d443-default-rtdb.europe-west1.firebasedatabase.app/'
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
