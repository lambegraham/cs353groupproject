import React, { Component ***REMOVED*** from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      title: 'React CRUD application',
      act: 0,
      index: '',
      datas: []
  ***REMOVED***
***REMOVED***

  componentDidMount(){
    this.refs.moduleCode.focus();
***REMOVED***

  //FOR NEW INFO TO BE ADDED TO TABLE
  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let moduleCode = this.refs.moduleCode.value;
    let moduleName = this.refs.moduleName.value;
    let moduleCA = this.refs.moduleCA.value;
    let moduleExam = this.refs.moduleExam.value;

    if(this.state.act === 0){       //NEW
      let data = {
        moduleCode, moduleName, moduleCA, moduleExam
    ***REMOVED***
      datas.push(data);
  ***REMOVED***else{                        //UPDATE
      let index = this.state.index;
      datas[index].moduleCode = moduleCode;
      datas[index].moduleName = moduleName;
      datas[index].moduleCA = moduleCA;
      datas[index].moduleExam = moduleExam;
  ***REMOVED***
    this.setState({
      datas: datas,
      act: 0
  ***REMOVED***);

    this.refs.myForm.reset();
    this.refs.moduleCode.focus();
***REMOVED***

  //REMOVING ONE OF THE ROWS OF THE TABLE
  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
  ***REMOVED***);

    this.refs.myForm.reset();
    this.refs.moduleCode.focus();
***REMOVED***

  //EDITING ONE OF THE ROWS OF THE TABLE
  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.moduleCode.value = data.moduleCode;
    this.refs.moduleName.value = data.moduleName;
    this.refs.moduleCA.value = data.moduleCA;
    this.refs.moduleExam.value = data.moduleExam;

    this.setState({
      act: 1,
      index: i
  ***REMOVED***);

    this.refs.moduleCode.focus();
***REMOVED***

  //CREATES EVERYTHING FOR THE PAGE
  render(){
    let datas = this.state.datas;
    return (
      <div className="App">
        <header className="pageHeader">
          {this.state.title***REMOVED***
        </header>
        <table className="tableSetUp">
          <thead className="tableHeaders">
            <tr>
              <th className="titles">Module Code</th>
              <th className="titles">Module Name</th>
              <th className="titles">CA Weight</th>
              <th className="titles">Exam Weight</th>
              <th className="titles">Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tableData">
              {datas.map((data, i) =>
                <div key={i***REMOVED*** className="myTable">
                  {data.moduleCode***REMOVED***
                </div>
              )***REMOVED***
              </td>
              <td className="tableData">
              {datas.map((data, i) =>
                <div key={i***REMOVED*** className="myTable">
                  {data.moduleName***REMOVED***
                </div>
              )***REMOVED***
              </td>
              <td className="tableData">
              {datas.map((data, i) =>
                <div key={i***REMOVED*** className="myTable">
                  {data.moduleCA***REMOVED***
                </div>
              )***REMOVED***
              </td>
              <td className="tableData">
              {datas.map((data, i) =>
                <div key={i***REMOVED*** className="myTable">
                  {data.moduleExam***REMOVED***
                </div>
              )***REMOVED***
              </td>
              <td className="tableData">
                {datas.map((data, i) =>
                <div key={i***REMOVED*** className="myTable">
                  <button onClick={()=>this.fRemove(i)***REMOVED*** className="myTableButton">Remove</button>
                  <button onClick={()=>this.fEdit(i)***REMOVED*** className="myTableButton">Edit</button>
                </div>
                )***REMOVED***
              </td>
            </tr>
          </tbody>
        </table>

        {/*
        <pre>
          {datas.map((data, i) =>
          <div key={i***REMOVED*** className="myTable">
          {i+1***REMOVED***. {data.moduleCode***REMOVED***, {data.moduleName***REMOVED***, {data.moduleCA***REMOVED***, {data.moduleExam***REMOVED***
          <button onClick={()=>this.fRemove(i)***REMOVED*** className="myTableButton">Remove</button>
          <button onClick={()=>this.fEdit(i)***REMOVED*** className="myTableButton">Edit</button>
          </div>
          )***REMOVED***
        </pre>
          */***REMOVED***

        <form ref="myForm" className="MyForm">
          <div>
            <input type="text" ref="moduleCode" placeholder="Enter Module Code" className="formField"/>
            <input type="text" ref="moduleName" placeholder="Enter Module Name" className="formField"/>
            <input type="text" ref="moduleCA" placeholder="Enter CA weight" className="formField"/>
            <input type="text" ref="moduleExam" placeholder="Enter Exam Weight" className="formField"/>
          </div>
          <button onClick={(e)=>this.fSubmit(e)***REMOVED*** className="myButton">Submit</button>
        </form>
      </div>
    );
***REMOVED***
***REMOVED***

export default App;