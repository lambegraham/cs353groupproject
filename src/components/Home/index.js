// import React, { Component ***REMOVED*** from 'react';
// import { Link ***REMOVED*** from 'react-router-dom';
// import * as ROUTES from '../../constants/routes';
// import * as firebase from 'firebase';
// ***REMOVED***
//
//
//
// const SignUpPage = () => (
//   <div>
//     <h1>SignUp</h1>
//       <ModuleForm />
//   </div>
// );
//
//
// const INITIAL_STATE = {
//   ModuleCode: '',
//   ModuleCA: '',
//
// ***REMOVED***;
//
// class ModuleForm extends Component {
//   constructor(props) {
//     super(props);
//
//
//     this.state = { ...INITIAL_STATE ***REMOVED***;
//
//
// ***REMOVED***
//   onSubmit = event => {
// ***REMOVED***
//   onChange = event => {
// ***REMOVED***
//
//   onChange = event => {
//   this.setState({ [event.target.name]: event.target.value ***REMOVED***);
// ***REMOVED***;
//
//   render() {
//
//     const {
//       ModuleCode,
//       ModuleCa,
//
//   ***REMOVED*** = this.state;
//
//
//
//
//     return (
//       <form onSubmit={this.onSubmit***REMOVED***>
//
//         <input id = "code"
//           name="ModuleCode"
//           value={ModuleCode***REMOVED***
//           onChange={this.onChange***REMOVED***
//           type="text"
//           placeholder="Module Code"
//         />
//       <input id = "ca"
//           name="ModuleCA"
//           value={ModuleCa***REMOVED***
//           onChange={this.onChange***REMOVED***
//           type="text"
//           placeholder="Module CA"
//         />
//
//       <button onClick={sendData***REMOVED*** type="submit">Sign Up</button>
//
//
//
//
//       </form>
//     );
// ***REMOVED***
// ***REMOVED***
//
//
// function sendData() {
//   // var moduleCode = document.getElementById("code").value();
//   // var ModuleCA = document.getElementById("ca").value();
//
//   var user = firebase.auth().currentUser;
//   const uid = user.uid;
//   console.log(uid);
//   const db = firebase.firestore();
//   console.log("hello");
//   db.collection('users').doc("9Mn1xR04bneEwneVLeojMp4WnEc2").collection("Modules").add({
//     moduleCode: "moduleCode", moduleName: "newModuleName", moduleCA: "ModuleCA", moduleExam: "newModuleExam"
// ***REMOVED***);
//
//
//
//
//
// ***REMOVED***
//
//
// const SignUpLink = () => (
//   <p>
//     Don't have an account? <Link to={ROUTES.SIGN_UP***REMOVED***>Sign Up</Link>
//   </p>
// );
// export default SignUpPage;
// export { ModuleForm, SignUpLink ***REMOVED***;

































import React from 'react';
import * as firebase from 'firebase';
import CRUD from '../CRUD/CRUD';
import CRUD2 from '../CRUD/CRUD2';
// //import SideNav, { NavItem, NavIcon, NavText ***REMOVED*** from '@trendmicro/react-sidenav';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText ***REMOVED*** from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import ToDoList from '../ToDoList/ToDoList.js';


//THIS IS NOT WORKING FULLY***********************************************
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' ***REMOVED***;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
***REMOVED***

  handleChange(event) {
    this.setState({ value: event.target.value ***REMOVED***);
***REMOVED***

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
***REMOVED***


  onCreate = () => { //creates data to the firebase
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    console.log(uid);

    //const db = firebase.firestore();
    // db.collection('users').doc(uid).collection("Modules").add({moduleCode: ***REMOVED***)
    //db.collection('users').add({moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam***REMOVED***);
    // db.collection('users').doc(uid).collection("Modules").add({
    //   moduleCode: newModuleCode, moduleName: newModuleName, moduleCA: newModuleCA, moduleExam: newModuleExam
    // ***REMOVED***
    // );
***REMOVED***

  render() {
    return (

      // <form onSubmit={this.handleSubmit***REMOVED***>
      //   <label>
      //     ModuleCode:
      //     <input type="text" value={this.state.value***REMOVED*** onChange={this.handleChange***REMOVED*** />
      //   </label>

      //   <label>
      //     ModuleName:
      //     <input type="text" value={this.state.value***REMOVED*** onChange={this.handleChange***REMOVED*** />
      //   </label>

      //   <label>
      //     ModuleCA:
      //     <input type="text" value={this.state.value***REMOVED*** onChange={this.handleChange***REMOVED*** />
      //   </label>

      //   <label>
      //     Module Exam:
      //     <input type="text" value={this.state.value***REMOVED*** onChange={this.handleChange***REMOVED*** />
      //   </label>

      //   <input type="submit" value="Submit" />
      // </form>

      <CRUD2/>
      // <React.Fragment>

      //   <div className="main">
      //     <div className="sideBar">
      //       <SideNav
      //         onSelect={(selected) => {
      //           // Add your code here
      //       ***REMOVED******REMOVED***
      //       >
      //         <SideNav.Toggle />
      //         <SideNav.Nav defaultSelected="home">
      //           <NavItem eventKey="home">
      //             <NavIcon>
      //               <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' ***REMOVED******REMOVED*** />
      //             </NavIcon>
      //             <NavText>
      //               <ToDoList />
      //             </NavText>
      //           </NavItem>
      //         </SideNav.Nav>
      //       </SideNav>
      //     </div>

      //     <div className="CRUD">
      //       <form onSubmit={this.handleSubmit***REMOVED***>
      //         <label>
      //           ModuleCode:
      //     <input type="text" value={this.state.value***REMOVED*** onChange={this.handleChange***REMOVED*** />
      //         </label>

      //         <label>
      //           ModuleName:
      //     <input type="text" value={this.state.value***REMOVED*** onChange={this.handleChange***REMOVED*** />
      //         </label>

      //         <label>
      //           ModuleCA:
      //     <input type="text" value={this.state.value***REMOVED*** onChange={this.handleChange***REMOVED*** />
      //         </label>

      //         <label>
      //           Module Exam:
      //     <input type="text" value={this.state.value***REMOVED*** onChange={this.handleChange***REMOVED*** />
      //         </label>

      //         <input type="submit" value="Submit" />
      //       </form>
      //     </div>

      //   </div>
      // </React.Fragment>

    );
***REMOVED***
***REMOVED***

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );

export default NameForm;






//**********Below here is the older code, keep it here ************************/
// import React from 'react';
// import * as firebase from 'firebase';
// import 'firebase/firestore'
// import CRUD from '../CRUD/CRUD.js'
// import { GradeInput ***REMOVED*** from '../CRUD/GradeInput';

// import { withAuthorization ***REMOVED*** from '../Session';

// export const Home = () => (


//   <div class = "container">
//     <h1>Home</h1>
//     <body>
//       {/* <CRUD/>  */***REMOVED***
//     </body>
//   </div>



// );

const Home = () => (
  <div>
    <h1>Welcome </h1>
  </div>

// const condition = authUser => !!authUser;
);

// // export default tData;
// export default withAuthorization(condition)(Home);
//export default Home;