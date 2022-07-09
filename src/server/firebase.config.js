import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzTB0jD8aWlSDOEG7D24aSBTQiwcIx4pw",
  authDomain: "dev-community-ffb2b.firebaseapp.com",
  projectId: "dev-community-ffb2b",
  storageBucket: "dev-community-ffb2b.appspot.com",
  messagingSenderId: "564320222868",
  appId: "1:564320222868:web:52f5d2a4e346d805857e81",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
