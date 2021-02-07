import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDJJWwWmY9avlC1oJQWqSQS42Nee5i9XuA",
  authDomain: "myapp-92090.firebaseapp.com",
  projectId: "myapp-92090",
  storageBucket: "myapp-92090.appspot.com",
  messagingSenderId: "854036468086",
  appId: "1:854036468086:web:e7b86a42578cc14545ea57"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
