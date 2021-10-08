import firebase from "firebase/app";

const firebaseConfig={
    apiKey: "AIzaSyAFwMpikgCgwlNbJwtbs9uemRCEbkc_Gyo",
    authDomain: "proyec-363fb.firebaseapp.com",
    projectId: "proyec-363fb",
    storageBucket: "proyec-363fb.appspot.com",
    messagingSenderId: "218106137371",
    appId: "1:218106137371:web:2911bc83e2a90781d5a1be"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

