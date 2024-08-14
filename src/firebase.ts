import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
  authDomain: "technoalliance-41e1e.firebaseapp.com",
  projectId: "technoalliance-41e1e",
  storageBucket: "technoalliance-41e1e.appspot.com",
  messagingSenderId: "163493959315",
  appId: "1:163493959315:web:238582f6a45a005fecdf66",
  measurementId: "G-LXSPQ0M5G6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, doc };