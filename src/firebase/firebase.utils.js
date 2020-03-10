import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDBaxySQ1tCpPkDA0aSHzevque8Q045YnY",
	authDomain: "crwn-db-f4332.firebaseapp.com",
	databaseURL: "https://crwn-db-f4332.firebaseio.com",
	projectId: "crwn-db-f4332",
	storageBucket: "crwn-db-f4332.appspot.com",
	messagingSenderId: "664481332226",
	appId: "1:664481332226:web:5662ff6836a027d6f1bb1b",
	measurementId: "G-G5NWW9WPGX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
