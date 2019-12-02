import React from 'react';
import * as firebase from 'firebase';
import { GradeInput ***REMOVED*** from './GradeInput';
***REMOVED***

function CRUD() {
  const [grades, setGrades] = React.useState([])
  const [newModuleCode, setNewModuleCode] = React.useState()
  const [newModuleName, setNewModuleName] = React.useState()
  const [newModuleCA, setNewModuleCA] = React.useState()
  const [newModuleExam, setNewModuleExam] = React.useState()

  //Below is React Hooks code
  React.useEffect(() => {
    const fetchData = async () => {
      const currentUser = firebase.auth().currentUser;
      const db = firebase.firestore()
      const data = await db.collection("users").get()
      console.log(data);
      //^this gets all documents in the collection
      //id: doc.id sets id field for grades
      var usersRef = db.collection('users').doc(currentUser);
      var modulesRef = usersRef.collection('users/Modules');

      modulesRef.get().then(doc => {
        const data = collection.data()
        console.log(data);
    ***REMOVED***)



      //--------------------------------------------------------------------------------------------------------------------
      // var user = firebase.auth().currentUser;
      // const uid = user.uid;
      // console.log(uid);

      // var docRef = db.collection("users");

      // docRef.get().then(function (doc) {
      //   if (doc.exists) {
      //     console.log("Document data:", doc.data());
      // ***REMOVED*** else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      // ***REMOVED***
      // ***REMOVED***).catch(function (error) {
      //   console.log("Error getting document:", error);
      // ***REMOVED***); 
      // code to check documents - seems to be returning nothing although users doc should appear.
      //--------------------------------------------------------------------------------------------------------------------



      setGrades(data.docs.map(doc => ({ ...doc.data(), id: doc.id ***REMOVED***)))
  ***REMOVED***
    fetchData()
***REMOVED***, [])

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
  );
***REMOVED***

export default CRUD;