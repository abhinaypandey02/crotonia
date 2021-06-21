import firebase from 'firebase';
import 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCFaJschNmmJ_xWr679elmRavNeFeAMkU0",
    authDomain: "crotonia-8058f.firebaseapp.com",
    projectId: "crotonia-8058f",
    storageBucket: "crotonia-8058f.appspot.com",
    messagingSenderId: "516303607527",
    appId: "1:516303607527:web:4667048fa93a53925bb442",
    measurementId: "G-MYDR9SSGLR"
  };
const fire=firebase.initializeApp(firebaseConfig);
export default fire;