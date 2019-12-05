import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: ""
***REMOVED***

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
  ***REMOVED***);
***REMOVED***

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
  ***REMOVED***);
    this.setState({
      text: ""
  ***REMOVED***);
***REMOVED***

  render() {
    return (
      <form onSubmit={this.handleSubmit***REMOVED***>
          <p>To Do List:</p>
        <input
          name="text"
          value={this.state.text***REMOVED***
          onChange={this.handleChange***REMOVED***
          placeholder="Enter a task..."
        />
        <button onClick={this.handleSubmit***REMOVED***>Add</button>
      </form>
    );
***REMOVED***
***REMOVED***