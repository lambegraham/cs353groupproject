import React from 'react';
import * as firebase from 'firebase';
import { GradeInput } from './GradeInput';
//import ReactDOM from 'react-dom';

//bootstrap stuff please dont edit -G
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
//import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// eslint-disable-next-line
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ToDoList from '../ToDoList/ToDoList.js';

let firebaseAppDefined = false

function CRUD2() {
    // eslint-disable-next-line
    const [grades, setGrades] = React.useState([])
    const [newModuleCode, setNewModuleCode] = React.useState()
    const [newModuleName, setNewModuleName] = React.useState()
    const [newModuleCA, setNewModuleCA] = React.useState()
    const [newModuleExam, setNewModuleExam] = React.useState()
    const [newModuleDate, setNewModuleDate] = React.useState()
    const [newModuleGoal, setNewModuleGoal] = React.useState()

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
                                    var cell5 = row.insertCell(4);
                                    var cell6 = row.insertCell(5);

                                    cell1.innerHTML = doc.data().moduleName;
                                    cell2.innerHTML = doc.data().moduleCode;
                                    cell3.innerHTML = doc.data().moduleCA;
                                    cell4.innerHTML = doc.data().moduleExam;
                                    cell5.innerHTML = doc.data().moduleDate;
                                    cell6.innerHTML = doc.data().moduleGoal;
                                    //end of eric's table variables
                                });
                            });
                        })();


                    }
                    else {
                        // User is signed out.
                        // ...
                    }
                });
                firebaseAppDefined = true
            }
        }
    }, 100)

    function onCreate() { //jack's create function
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) { // User is signed in.
                const db = firebase.firestore(); //database instance
                var userId = user.uid;

                db.collection('users').doc(userId).collection("Modules").add({
                    moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam, moduleDate: newModuleDate, moduleGoal: newModuleGoal 
                }
                );

            }
        });
    }

    // eslint-disable-next-line
    function onDelete() {

    }

    function onDeleteAll() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                const db = firebase.firestore(); //database instance
                var userId = user.uid;

                function check() {
                    if (window.confirm("Are you sure? This cannot be undone") === true) {
                        db.collection('users').doc(userId).collection("Modules")
                            .get()
                            .then(res => {
                                res.forEach(element => {
                                    element.ref.delete();
                                });
                            });
                        console.log("All modules deleted");
                        alert("All modules were deleted..");
                    }
                    else {
                        alert("Nothing was deleted..");
                    }

                }

                check();


            }
        });
    }

    // eslint-disable-next-line
    function onUpdate() { //jack's update function - not currently working
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
                });
            }
        });
       
    }

    function crudTable() { //this is the crud table build function
        //there is a LOT of bootstrap below! if you are editing this PLEASE text Graham and I can guide you through it
        //PLEASE DO NOT DELETE ANYTHING PLEASE DO NOT DELETE ANYTHING PLEASE DO NOT DELETE ANYTHING 
        //insert crudTable variables here (not needed yet I think, maybe needed for statistics) -G

        return (
            <div class="container-fluid" >
                <Row>
                    <Col xs={8}>
                        <Table striped bordered hover id="t1">
                            <thead>
                                <tr>
                                    <th>CODE</th>
                                    <th>NAME</th>
                                    <th>CA</th>
                                    <th>EXAM</th>
                                    <th>DATE</th>
                                    <th>GOAL</th>
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
                    <tr className="createRow"> */}

                                    {grades.map(grade => (
                                        <div key={grade.moduleCode}>
                                            <GradeInput grade={grade} />
                                        </div> //New component
                                    ))}

                                    <FormControl value={newModuleCode} onChange={(e) => setNewModuleCode(e.target.value)} placeholder="Module Code" />
                                    <FormControl value={newModuleName} onChange={(e) => setNewModuleName(e.target.value)} placeholder="Module Name" />
                                    <FormControl value={newModuleCA} onChange={(e) => setNewModuleCA(e.target.value)} placeholder="Module CA" />
                                    <FormControl value={newModuleExam} onChange={(e) => setNewModuleExam(e.target.value)} placeholder="Module Exam" />
                                    <FormControl value={newModuleDate} onChange={(e) => setNewModuleDate(e.target.value)} placeholder="dd/mm/yyyy" type="date"/>
                                    <FormControl value={newModuleGoal} onChange={(e) => setNewModuleGoal(e.target.value)} placeholder="Module Goal" />
                                    {/* </tr> */}
                                </Form>
                                <Button variant="primary" block onClick={onCreate}>Create</Button>
                            </Card.Body>

                        </Card>

                        <Card>
                            <Card.Header>Delete All Modules</Card.Header>
                            <Card.Body>
                                <Button variant="danger" block onClick={onDeleteAll}>Delete all modules</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>To Do List</Card.Header>
                            <Card.Body>
                                <ToDoList />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        crudTable()
    )
}

export default CRUD2;

 /*Killians Queries for sorting
        function sort(){
         if(document.getElementById("desc").checked==true){
                var desc = db.collection('users).doc(userId).colection('Modules).OrderBy("moduleName", "desc");
                desc.get().then(...)
            }
            else if(document.getElementById(high).checked==true){
                 var high = db.collection('users').doc(userId).collection('Modules').OrderBy("moduleCA","desc");
                 high.get().then(...)
            }
            else if(document.getElementById(low).checked==true){
            var low = db.collection('users').doc(userId).collection('Modules').OrderBy("moduleCA", "asc"); 
            low.get().then(...)
            }
            else{
                var asc = db.collection('users').doc(userId).collection('Modules').OrderBy("moduleName", "asc");
                    asc.get().then(...)
            }
        }
        
*/