import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGztFzbbz5ou59r1_V_mLUfOa_optyAwQ",
  authDomain: "online-job-portal-bd085.firebaseapp.com",
  projectId: "online-job-portal-bd085",
  storageBucket: "online-job-portal-bd085.appspot.com",
  messagingSenderId: "874346485161",
  appId: "1:874346485161:web:270319564a9f59220460b8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};