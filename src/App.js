import React from "react";
import "./App.css";
import firebase from "firebase";
import SampleData from "./SampleData";

var firebaseConfig = {
  apiKey: "AIzaSyCxe9KJsLa6szLG6dYtWS0m0UKAO9FZEs0",
  authDomain: "moon-ogiri-9cb45.firebaseapp.com",
  databaseURL: "https://moon-ogiri-9cb45.firebaseio.com",
  projectId: "moon-ogiri-9cb45",
  storageBucket: "moon-ogiri-9cb45.appspot.com",
  messagingSenderId: "179545196501",
  appId: "1:179545196501:web:6356332520f82a0130df5c",
  measurementId: "G-6N2KQD6S2G"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

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
