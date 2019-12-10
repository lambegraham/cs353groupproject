import React from "react";
import shortid from "shortid";
import Button from 'react-bootstrap/Button';

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
        <input
          name="text"
          value={this.state.text***REMOVED***
          onChange={this.handleChange***REMOVED***
          placeholder="Enter a task..."
        />
        <Button onClick={this.handleSubmit***REMOVED***>Add</Button>
      </form>
    );
***REMOVED***
***REMOVED***