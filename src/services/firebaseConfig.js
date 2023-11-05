import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAf-LFGjPtvRv2qRaDtLeHxm9_pFOI8ous",
  authDomain: "vettel-to-react.firebaseapp.com",
  projectId: "vettel-to-react",
  storageBucket: "vettel-to-react.appspot.com",
  messagingSenderId: "453775725153",
  appId: "1:453775725153:web:b6acc817344029c34a9020",
  measurementId: "G-LLJL4RZ1G8"
};


export const app = initializeApp(firebaseConfig);
