import React from 'react';
import * as firebase from 'firebase';
import { GradeInput } from './GradeInput';
import 'firebase/firestore';

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

      //--------------------------------------------------------------------------------------------------------------------
      // var user = firebase.auth().currentUser;
      // const uid = user.uid;
      // console.log(uid);

      // var docRef = db.collection("users");

      // docRef.get().then(function (doc) {
      //   if (doc.exists) {
      //     console.log("Document data:", doc.data());
      //   } else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      //   }
      // }).catch(function (error) {
      //   console.log("Error getting document:", error);
      // }); 
      // code to check documents - seems to be returning nothing although users doc should appear.
      //--------------------------------------------------------------------------------------------------------------------
      /// setGrades(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])

  const onCreate = () => { //creates data to the firebase
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    console.log(uid);
    const db = firebase.firestore();
    //db.collection('users').add({moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam});
    db.collection('users').doc(uid).collection("Modules").add({
      moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam
    }
    );
  }

  const onLoad = () => {
    const db = firebase.firestore();
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    var query = db.collection('users').where("uid", "==", uid);
    console.log(user);
    console.log(query);
  }

  //Layout
  return (
    //<header className="pageHeader"></header>
    <table className="crudTable">
      <thead className="headers"></thead>
      <tr className="createRow">
        {grades.map(grade => (
          <div key={grade.moduleCode}>
            <GradeInput grade={grade} />
          </div> //New component
        ))}
        <input value={newModuleCode} onChange={(e) => setNewModuleCode(e.target.value)} placeholder="Module Code" />
        <input value={newModuleName} onChange={(e) => setNewModuleName(e.target.value)} placeholder="Module Name" />
        <input value={newModuleCA} onChange={(e) => setNewModuleCA(e.target.value)} placeholder="Module CA" />
        <input value={newModuleExam} onChange={(e) => setNewModuleExam(e.target.value)} placeholder="Module Exam" />
        <button onClick={onCreate}>Create</button>
      </tr>
    </table>
  );
}


export default CRUD;
