import React from 'react';
import * as firebase from 'firebase';
import { GradeInput ***REMOVED*** from './GradeInput';
***REMOVED***
import Table from 'react-bootstrap/Table';


let firebaseAppDefined = false

setInterval(() => {
  if (!firebaseAppDefined) {
    if (firebase.app()) {

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          const db = firebase.firestore(); //database instance
          var userEmail = user.email;
          var userId = user.uid;
          console.log(userId);

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
                document.getElementById("CRUDtableid").innerHTML = "Graham";
              
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


function CRUD() {
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


  const onCreate = () => { //creates data to the firebase
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    console.log(uid);
    const db = firebase.firestore();
    //db.collection('users').add({moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam***REMOVED***);
    db.collection('users').doc(uid).collection("Modules").add({
      moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam
  ***REMOVED***
    );
***REMOVED***

  //Layout
  return (
    //<header className="pageHeader"></header>
    // <table className="crudTable">
    //   <thead className="headers"></thead>
    //   <tr className="createRow">
    //     {grades.map(grade => (
    //       <div key={grade.moduleCode***REMOVED***>
    //         <GradeInput grade={grade***REMOVED*** />
    //       </div> //New component
    //     ))***REMOVED***
    //     <input value={newModuleCode***REMOVED*** onChange={(e) => setNewModuleCode(e.target.value)***REMOVED*** placeholder="Module Code" />
    //     <input value={newModuleName***REMOVED*** onChange={(e) => setNewModuleName(e.target.value)***REMOVED*** placeholder="Module Name" />
    //     <input value={newModuleCA***REMOVED*** onChange={(e) => setNewModuleCA(e.target.value)***REMOVED*** placeholder="Module CA" />
    //     <input value={newModuleExam***REMOVED*** onChange={(e) => setNewModuleExam(e.target.value)***REMOVED*** placeholder="Module Exam" />
    //     <button onClick={onCreate***REMOVED***>Create</button>
    //   </tr>
    // </table>
<Table striped bordered hover id="CRUDtableid">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
  );
***REMOVED***

export default CRUD;