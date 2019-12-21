import React from "react";
import "./App.css";
import firebase from "firebase";
import SampleData from "./SampleData";

var firebaseConfig = {
  apiKey: "AIzaSyAOvxYUIFXeRNdjJt6hL7673z3wXZDgfa4",
  authDomain: "moon-ogiri.firebaseapp.com",
  databaseURL: "https://moon-ogiri.firebaseio.com",
  projectId: "moon-ogiri",
  storageBucket: "moon-ogiri.appspot.com",
  messagingSenderId: "956945824736",
  appId: "1:956945824736:web:ad64ff6a2494167f2d8985",
  measurementId: "G-Q8Q298B81Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>fire</h1>
        <h2>sample data</h2>
        <SampleData />
      </div>
    );
  }
}

export default App;
