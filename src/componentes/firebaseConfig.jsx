import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCS-gCGQ-sBjohyTV5T_QZjfaGpHVhP-5k",
  authDomain: "mundo-mascotas-e7096.firebaseapp.com",
  projectId: "mundo-mascotas-e7096",
  storageBucket: "mundo-mascotas-e7096.appspot.com",
  messagingSenderId: "543667545714",
  appId: "1:543667545714:web:ffdf1d7e769b0e566e84eb"
};


const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)