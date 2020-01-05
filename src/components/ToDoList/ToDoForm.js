import React from "react";
import shortid from "shortid";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup'

export default class TodoForm extends React.Component {
  state = {
    text: ""
***REMOVED***;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
  ***REMOVED***);
***REMOVED***;

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
***REMOVED***;

  render() {
    return (
      
      <Form onSubmit={this.handleSubmit***REMOVED***>
        <InputGroup>
        <FormControl
          name="text"
          value={this.state.text***REMOVED***
          onChange={this.handleChange***REMOVED***
          placeholder="Enter a task..."
        />
          <InputGroup.Append>
          <Button onClick={this.handleSubmit***REMOVED***>Add</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
***REMOVED***
***REMOVED***