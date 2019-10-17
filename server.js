var express = require('express'); //import express 
var app = express();

//to handle HTTP get request
app.get('/', function (req, res) {
  console.log("Get Request");
  res.send("Get Request");
***REMOVED***);

//start server on port: 8080
var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("server listening at http://%s:%s", host, port);
***REMOVED***);
var firebase = require('firebase');

var firebaseConfig = {
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