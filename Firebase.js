import firebase from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD1cxoyMbxC-oB-e5Q0R6thpl4QaOpZkPk",
    authDomain: "visiosoft-3cc60.firebaseapp.com",
    projectId: "visiosoft-3cc60",
    storageBucket: "visiosoft-3cc60.appspot.com",
    messagingSenderId: "1036486245280",
    appId: "1:1036486245280:web:8a0f20084173204fef42c5",
    measurementId: 'G-measurement-id',
  };

firebase.initializeApp(firebaseConfig);

export default firebase;