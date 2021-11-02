import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAvGZR3DQ39HlcI8j3GwxPrhQmeb8gGat8",
    authDomain: "whatsapp-clone-44fea.firebaseapp.com",
    projectId: "whatsapp-clone-44fea",
    storageBucket: "whatsapp-clone-44fea.appspot.com",
    messagingSenderId: "567628146843",
    appId: "1:567628146843:web:702ed2ea7f39e1793abe3e"
  };

  const app = !firebase.apps.length
   ? firebase.initializeApp(firebaseConfig)
   : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };