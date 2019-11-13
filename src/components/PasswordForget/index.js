import React, {Component***REMOVED*** from 'react';
import {Link***REMOVED*** from 'react-router-dom';

import { withFirebase***REMOVED*** from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForget = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
***REMOVED***;

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE ***REMOVED***;
***REMOVED***
  onSubmit = event => {
    const { email ***REMOVED*** = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE ***REMOVED***);
    ***REMOVED***)
      .catch(error => {
        this.setState({ error ***REMOVED***);
    ***REMOVED***);
    event.preventDefault();
***REMOVED***
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value ***REMOVED***);
***REMOVED***
  render() {
    const { email, error ***REMOVED*** = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit***REMOVED***>
        <input
          name="email"
          value={this.state.email***REMOVED***
          onChange={this.onChange***REMOVED***
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid***REMOVED*** type="submit">
          Reset My Password
        </button>
        {error && <p>{error.message***REMOVED***</p>***REMOVED***
      </form>
    );
***REMOVED***
***REMOVED***
const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET***REMOVED***>Forgot Password?</Link>
  </p>
);
export default PasswordForget;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink ***REMOVED***;
