import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ChatRoutes from "./routes/chartRoutes";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD99Dz_S5gNrRJk4YPwv4TSIDzsXWtc84k",
  authDomain: "deploy-chart.firebaseapp.com",
  projectId: "deploy-chart",
  storageBucket: "deploy-chart.appspot.com",
  messagingSenderId: "69260348452",
  appId: "1:69260348452:web:17d671f8961fee31ef1cb1",
  measurementId: "G-0RF3ZK7GDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <React.StrictMode>
      <Router>
        <ChatRoutes />
      </Router>
    </React.StrictMode>
  );
}

export default App;
