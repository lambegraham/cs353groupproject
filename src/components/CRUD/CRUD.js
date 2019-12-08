import React from 'react';
import * as firebase from 'firebase';
import { GradeInput ***REMOVED*** from './GradeInput';
***REMOVED***
import Table from 'react-bootstrap/Table';

//function firebaseTableShit(){
let firebaseAppDefined = false


//***REMOVED***

function CRUD() {
  //firebaseTableShit();
  const [grades, setGrades] = React.useState([])
  const [newModuleCode, setNewModuleCode] = React.useState()
  const [newModuleName, setNewModuleName] = React.useState()
  const [newModuleCA, setNewModuleCA] = React.useState()
  const [newModuleExam, setNewModuleExam] = React.useState()

  //------------------ JACKS CODE (AND MARIOS) --------------------
  // //Below is React Hooks code
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore()
  //     const data = await db.collection("users").get()
  //     getUserId();
  //     //^this gets all documents in the collection
  //     //id: doc.id sets id field for grades

  //     //--------------------------------------------------------------------------------------------------------------------
  //     // var user = firebase.auth().currentUser;
  //     // const uid = user.uid;
  //     // console.log(uid);

  //     // var docRef = db.collection("users");

  //     // docRef.get().then(function (doc) {
  //     //   if (doc.exists) {
  //     //     console.log("Document data:", doc.data());
  //     // ***REMOVED*** else {
  //     //     // doc.data() will be undefined in this case
  //     //     console.log("No such document!");
  //     // ***REMOVED***
  //     // ***REMOVED***).catch(function (error) {
  //     //   console.log("Error getting document:", error);
  //     // ***REMOVED***);
  //     // code to check documents - seems to be returning nothing although users doc should appear.
  //     //--------------------------------------------------------------------------------------------------------------------



  //     setGrades(data.docs.map(doc => ({ ...doc.data(), id: doc.id ***REMOVED***)))
  // ***REMOVED***
  //   fetchData()
  // ***REMOVED***, [])


 
  setInterval(() => {
    if (!firebaseAppDefined) {
      if (firebase.app()) {
  
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
  
            // User is signed in.
            const db = firebase.firestore(); //database instance
            var userEmail = user.email;
            var userId = user.uid;
            // document.getElementById('hello1').innerHTML = "blah";
            console.log("blah");
  
            // DISPLAYS CERTAIN MODULE FOR CURRENT USER
            // var testRef = db.collection('users').doc(userId).collection("Modules").doc("fQKeOjsbAUrafujNpDbx");
            // testRef.get().then(function(doc) {
            // console.log(doc.data());
            // ***REMOVED***);
  
            //--------------- DISPLAYS ALL MODULES FOR CURRENT USER IN CONSOLE -------------------------
            db.collection('users').doc(userId).collection("Modules").get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
  
                  console.log(doc.data().moduleExam);
                  var table = document.getElementById('t1');
                  var row = table.insertRow(table.rows.length);
                  var cell1 = row.insertCell(0);
                  var cell2 = row.insertCell(1);
                  var cell3 = row.insertCell(2);
                  var cell4 = row.insertCell(3);
                  cell1.innerHTML = doc.data().moduleName;
                  cell2.innerHTML = doc.data().moduleCode;
                  cell3.innerHTML = doc.data().moduleCA;
                  cell4.innerHTML = doc.data().moduleExam;
  

  
                 
  
            ***REMOVED***);
        ***REMOVED***); //----------------------------------------------------------------------------
            // ...
        ***REMOVED*** else {
            // User is signed out.
            // ...
        ***REMOVED***
      ***REMOVED***);
        firebaseAppDefined = true
    ***REMOVED***
  ***REMOVED***
***REMOVED***, 100)
     const onCreate = () => { //creates data to the firebase
                    // var user = firebase.auth().currentUser;
                    // const uid = user.uid;
                    // console.log(uid);
                    // const db = firebase.firestore();
                    //db.collection('users').add({moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam***REMOVED***);

                    
                    firebase.auth().onAuthStateChanged(function (user) {
                      if (user) {
              
                        // User is signed in.
                        const db = firebase.firestore(); //database instance
                        var userEmail = user.email;
                        var userId = user.uid;
                         db.collection('users').doc(userId).collection("Modules").add({
                      moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam
                  ***REMOVED***
                    );
                    ***REMOVED***
                  ***REMOVED***);

                   
                ***REMOVED***
  //Layout
  return (
    <div>
    <header className="pageHeader"></header>
    <table className="crudTable">
      <thead className="headers"></thead>
      <tr className="createRow">
        {grades.map(grade => (
          <div key={grade.moduleCode***REMOVED***>
            <GradeInput grade={grade***REMOVED*** />
          </div> //New component
        ))***REMOVED***
        <input value={newModuleCode***REMOVED*** onChange={(e) => setNewModuleCode(e.target.value)***REMOVED*** placeholder="Module Code" />
        <input value={newModuleName***REMOVED*** onChange={(e) => setNewModuleName(e.target.value)***REMOVED*** placeholder="Module Name" />
        <input value={newModuleCA***REMOVED*** onChange={(e) => setNewModuleCA(e.target.value)***REMOVED*** placeholder="Module CA" />
        <input value={newModuleExam***REMOVED*** onChange={(e) => setNewModuleExam(e.target.value)***REMOVED*** placeholder="Module Exam" />
        <button onClick={onCreate***REMOVED***>Create</button>
      </tr>
    </table>


<Table striped bordered hover id="t1">
  <thead>
    <tr>
      <th>NAME</th>
      <th>CODE</th>
      <th>CA</th>
      <th>EXAM</th>


    </tr>
  </thead>
  <tbody>

  </tbody>
</Table>

<Table striped bordered hover id="tinput">
<thead>
  <tr>
    
  </tr>
  </thead>
  </Table>

</div>
  );
***REMOVED***

export default CRUD;
