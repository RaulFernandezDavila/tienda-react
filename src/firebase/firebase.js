import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIF6IApuUt1fDJB_J7fI22rY3sHLmSijM",
  authDomain: "tienda-react-2e13f.firebaseapp.com",
  projectId: "tienda-react-2e13f",
  storageBucket: "tienda-react-2e13f.firebasestorage.app",
  messagingSenderId: "222316053050",
  appId: "1:222316053050:web:734a8bd42f32392a0eab03",
  measurementId: "G-N9T745NZKK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);