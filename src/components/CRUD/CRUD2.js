import React from 'react';
import * as firebase from 'firebase';
import { GradeInput ***REMOVED*** from './GradeInput';
import ReactDOM from 'react-dom';

//bootstrap stuff please dont edit -G
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

let firebaseAppDefined = false

function CRUD2() {
    const [grades, setGrades] = React.useState([])
    const [newModuleCode, setNewModuleCode] = React.useState()
    const [newModuleName, setNewModuleName] = React.useState()
    const [newModuleCA, setNewModuleCA] = React.useState()
    const [newModuleExam, setNewModuleExam] = React.useState()

    setInterval(() => { //all for fetching data
        if (!firebaseAppDefined) {
            if (firebase.app()) {
                firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        // User is signed in.

                        const db = firebase.firestore(); //firestore instance
                        var userId = user.uid; //userID var

                        (function fetchData() { //fetch and relay table data to return statement
                            db.collection('users').doc(userId).collection("Modules").onSnapshot(function (querySnapshot) {

                                var table = document.getElementById('tbody'); //gets table body
                                table.innerHTML = ''; //resets table body (stops duplicates on update)

                                querySnapshot.forEach(function (doc) {
                                    console.log(doc.id, " => ", doc.data()); //export data to console

                                    //eric's table variables 
                                    var row = table.insertRow(table.rows.length);
                                    var cell1 = row.insertCell(0);
                                    var cell2 = row.insertCell(1);
                                    var cell3 = row.insertCell(2);
                                    var cell4 = row.insertCell(3);
                                    var cell5 = row.insertCell();
                                    var cell6 = row.insertCell();

                                    cell1.innerHTML = doc.data().moduleName;
                                    cell2.innerHTML = doc.data().moduleCode;
                                    cell3.innerHTML = doc.data().moduleCA;
                                    cell4.innerHTML = doc.data().moduleExam;
                                    cell5.innerHTML = "<button class='btn btn-success' onClick={onUpdate***REMOVED***>UPDATE </button>";
                                    cell6.innerHTML = "<button class='btn btn-danger' onClick={onDelete***REMOVED***>DELETE </button>";
                                    //end of eric's table variables
                              ***REMOVED***);
                          ***REMOVED***);
                      ***REMOVED***)();


                  ***REMOVED***
                    else {
                        // User is signed out.
                        // ...
                  ***REMOVED***
              ***REMOVED***);
                firebaseAppDefined = true
          ***REMOVED***
      ***REMOVED***
  ***REMOVED***, 100)

    function onCreate() { //jack's create function
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) { // User is signed in.
                const db = firebase.firestore(); //database instance
                var userId = user.uid;

                db.collection('users').doc(userId).collection("Modules").add({
                    moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam
              ***REMOVED***
                );

          ***REMOVED***
      ***REMOVED***);
  ***REMOVED***

    function onDelete(){

  ***REMOVED***

    function onUpdate(){ //jack's update function - not currently working
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            const db = firebase.firestore(); //database instance
            var userId = user.uid;
            //.set sets all data from before but with updated data
            db.collection('users').doc(userId).set({
              ...grades,
              newModuleCode,
              newModuleName,
              newModuleCA,
              newModuleExam
          ***REMOVED***);
        ***REMOVED***
      ***REMOVED***);
  ***REMOVED***

    function crudTable() { //this is the crud table build function
        //there is a LOT of bootstrap below! if you are editing this PLEASE text Graham and I can guide you through it
        //PLEASE DO NOT DELETE ANYTHING PLEASE DO NOT DELETE ANYTHING PLEASE DO NOT DELETE ANYTHING 
        //insert crudTable variables here (not needed yet I think, maybe needed for statistics) -G

        return (
            <div class="container-fluid" >
                <Row>

                    <Col xs={9***REMOVED***>
                        <Table striped bordered hover id="t1">
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>CODE</th>
                                    <th>CA</th>
                                    <th>EXAM</th>
                                    <th>UPDATE</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                            </tbody>
                        </Table>
                    </Col>

                    <Col>
                    <Card>
                    <Card.Header>Add a module</Card.Header>
                    <Card.Body>
                        <Form className="crudTable">
                            {/* <thead className="headers"></thead>
                    <tr className="createRow"> */***REMOVED***

                            {grades.map(grade => (
                                <div key={grade.moduleCode***REMOVED***>
                                    <GradeInput grade={grade***REMOVED*** />
                                </div> //New component
                            ))***REMOVED***
                        
                            <FormControl value={newModuleCode***REMOVED*** onChange={(e) => setNewModuleCode(e.target.value)***REMOVED*** placeholder="Module Code" />
                            <FormControl value={newModuleName***REMOVED*** onChange={(e) => setNewModuleName(e.target.value)***REMOVED*** placeholder="Module Name" />
                            <FormControl value={newModuleCA***REMOVED*** onChange={(e) => setNewModuleCA(e.target.value)***REMOVED*** placeholder="Module CA" />
                            <FormControl value={newModuleExam***REMOVED*** onChange={(e) => setNewModuleExam(e.target.value)***REMOVED*** placeholder="Module Exam" />
                            
                            {/* </tr> */***REMOVED***
                        </Form>
                        </Card.Body>
                        <Button variant="primary" onClick={onCreate***REMOVED***>Create</Button>
                        </Card>
                    </Col>

                </Row>
            </div>
        )
  ***REMOVED***



    return (
        crudTable()
    )
***REMOVED***

export default CRUD2;