import React from 'react';
//import firebase from '../../../Firebase/firebase.js';
import * as firebase from 'firebase';
***REMOVED***

export const GradeInput = ({grade***REMOVED***) => {
    const [moduleCode, setCode] = React.useState(grade.moduleCode);
    const [moduleName, setName] = React.useState(grade.moduleName);
    const [moduleCA, setCA] = React.useState(grade.moduleCA);
    const [moduleExam, setExam] = React.useState(grade.moduleExam);

    const onUpdate = () => { //this will update firebase
        const db = firebase.firestore();
        //.set sets all data from before but with updated data
        db.collection('users').doc(grade.id).set({...grade, moduleCode, moduleName, moduleCA, moduleExam***REMOVED***);
  ***REMOVED***

    const onDelete = () => {    //will delete from firebase
        const db = firebase.firestore();
        db.collection('users').doc(grade.id).delete();
  ***REMOVED***

    return( /*e is the event reference and it calls setCode to set inputted data*/
    <table className="crudTable">
        <thead className="headers">
          <th>Module Code</th>
          <th>Module Name</th>
          <th>Module CA</th>
          <th>Module Exam</th>
          <th>Action</th>
        </thead>
        <td>
        <input
            value={moduleCode***REMOVED***
            onChange={e => {
                setCode(e.target.value);
          ***REMOVED******REMOVED***
        />
        </td>
        <td>
        <input 
            value={moduleName***REMOVED***
            onChange={e => {
                setName(e.target.value);
          ***REMOVED******REMOVED***
        />
        </td>
        <td>
        <input 
            value={moduleCA***REMOVED***
            onChange={e => {
                setCA(e.target.value);
          ***REMOVED******REMOVED***
        />
        </td>
        <td>
        <input 
            value={moduleExam***REMOVED***
            onChange={e => {
                setExam(e.target.value);
          ***REMOVED******REMOVED***
        />
        </td>
        <td>
        <button onClick={onUpdate***REMOVED***>Update</button>
        <button onClick={onDelete***REMOVED***>Delete</button>
        </td>

    </table>
    );
***REMOVED***;