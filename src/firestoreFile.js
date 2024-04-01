import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEgB-Tb8KvyoW9hJ5a0J6b9UCjpRP3Wlk",
  authDomain: "meal-delivery-app-ddb86.firebaseapp.com",
  projectId: "meal-delivery-app-ddb86",
  storageBucket: "meal-delivery-app-ddb86.appspot.com",
  messagingSenderId: "1003623600024",
  appId: "1:1003623600024:web:7f46f54d6e2c76dd2565ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();