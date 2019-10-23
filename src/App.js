import React from 'react';
import logo from './logo.svg';
import './App.css';

var firebase = require("firebase/app"); //defined firebase object
require("firebase/auth"); //include firebase auth

var firebaseConfig = { //firebase config do not touch
  apiKey: "AIzaSyCLhR7zyHM99cWqOvPtPkUmE55Eyv_CyDE",
  authDomain: "cs353groupproject-d4b21.firebaseapp.com",
  databaseURL: "https://cs353groupproject-d4b21.firebaseio.com",
  projectId: "cs353groupproject-d4b21",
  storageBucket: "cs353groupproject-d4b21.appspot.com",
  messagingSenderId: "209584389821",
  appId: "1:209584389821:web:2c50e880a785f2cf3881d4"
***REMOVED***;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          WE DID IT BOYS
        </p>
        <img src={logo***REMOVED*** className="App-logo" alt="logo" />
        <p>
          WE DID IT BOYS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
***REMOVED***

export default App;
