import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBgPJYBCoklu9fVFxTLAHHzgqZSO8wNQek",
  authDomain: "disney-plus-clone-41cf6.firebaseapp.com",
  projectId: "disney-plus-clone-41cf6",
  storageBucket: "disney-plus-clone-41cf6.appspot.com",
  messagingSenderId: "1084211669031",
  appId: "1:1084211669031:web:b55bdfa21f7c33c53c0602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth, storage};
export default db;





