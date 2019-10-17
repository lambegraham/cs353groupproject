var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log("HTTP Get Request");
  res.send("HTTP GET Request");
***REMOVED***);



app.put('/', function (req, res) {
  console.log("HTTP Put Request");
  res.send("HTTP PUT Request");
***REMOVED***);

app.post('/', function (req, res) {
  console.log("HTTP POST Request");
  res.send("HTTP POST Request");  
***REMOVED***);

app.delete('/', function (req, res) {
  console.log("HTTP DELETE Request");
  res.send("HTTP DELETE Request");
***REMOVED***);

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
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