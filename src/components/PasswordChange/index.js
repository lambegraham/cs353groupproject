import React, { Component ***REMOVED*** from 'react';

import { withFirebase ***REMOVED*** from '../Firebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
***REMOVED***;

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE ***REMOVED***;
***REMOVED***

  onSubmit = event => {
    const { passwordOne ***REMOVED*** = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE ***REMOVED***);
    ***REMOVED***)
      .catch(error => {
        this.setState({ error ***REMOVED***);
    ***REMOVED***);

    event.preventDefault();
***REMOVED***;

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value ***REMOVED***);
***REMOVED***;

  render() {
    const { passwordOne, passwordTwo, error ***REMOVED*** = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
        <div class="container">
        <h2>Change password</h2>
        <Form onSubmit={this.onSubmit***REMOVED***>
          <Form.Group>
            <Form.Label>Enter your email below and we'll send you a link to reset your password.</Form.Label>
            <Form.Control input
                name="passwordOne"
                value={passwordOne***REMOVED***
                onChange={this.onChange***REMOVED***
                type="password"
                placeholder="New Password"
            />
            
            <Form.Control input
                name="passwordTwo"
                value={passwordTwo***REMOVED***
                onChange={this.onChange***REMOVED***
                type="password"
                placeholder="Confirm New Password"
            />
            <Form.Text className="text-muted">
              Never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Button disabled={isInvalid***REMOVED*** type="submit">
            Reset My Password
        </Button>
          {error && <p>{error.message***REMOVED***</p>***REMOVED***
        </Form>
      </div>
    //   <form onSubmit={this.onSubmit***REMOVED***>
    //     <input
    //       name="passwordOne"
    //       value={passwordOne***REMOVED***
    //       onChange={this.onChange***REMOVED***
    //       type="password"
    //       placeholder="New Password"
    //     />
    //     <input
    //       name="passwordTwo"
    //       value={passwordTwo***REMOVED***
    //       onChange={this.onChange***REMOVED***
    //       type="password"
    //       placeholder="Confirm New Password"
    //     />
    //     <button disabled={isInvalid***REMOVED*** type="submit">
    //       Reset My Password
    //     </button>

    //     {error && <p>{error.message***REMOVED***</p>***REMOVED***
    //   </form>
    );
***REMOVED***
***REMOVED***

export default withFirebase(PasswordChangeForm);