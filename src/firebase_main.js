import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDF7xTgTopCtQ2UkZJOjUK92MGosw88EUs",
  authDomain: "sopilatranscriptorweb.firebaseapp.com",
  projectId: "sopilatranscriptorweb",
  storageBucket: "sopilatranscriptorweb.firebasestorage.app",
  messagingSenderId: "953272182873",
  appId: "1:953272182873:web:543f86bfc22db17f16a948",
  measurementId: "G-7L4W9SJG40"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { }