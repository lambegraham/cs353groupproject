import React, { Component ***REMOVED*** from 'react';
import { Link, withRouter ***REMOVED*** from 'react-router-dom';
import { compose ***REMOVED*** from 'recompose';

import { withFirebase ***REMOVED*** from '../Firebase';
import * as ROUTES from '../../constants/routes';
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
***REMOVED***;


class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE ***REMOVED***;
***REMOVED***
  onSubmit = event => {
    // eslint-disable-next-line
    const { username, email, passwordOne ***REMOVED*** = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE ***REMOVED***);
        this.props.history.push(ROUTES.HOME);
    ***REMOVED***)
      .catch(error => {
        this.setState({ error ***REMOVED***);
    ***REMOVED***);
    event.preventDefault();
***REMOVED***
  onChange = event => {
***REMOVED***


  onChange = event => {
    this.setState({ [event.target.name]: event.target.value ***REMOVED***);
***REMOVED***

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
  ***REMOVED*** = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';



    return (
      <form onSubmit={this.onSubmit***REMOVED***>
        <input
          name="username"
          value={username***REMOVED***
          onChange={this.onChange***REMOVED***
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email***REMOVED***
          onChange={this.onChange***REMOVED***
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne***REMOVED***
          onChange={this.onChange***REMOVED***
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo***REMOVED***
          onChange={this.onChange***REMOVED***
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid***REMOVED*** type="submit">
          Sign Up
        </button>
        {error && <p>{error.message***REMOVED***</p>***REMOVED***
      </form>
    );
***REMOVED***
***REMOVED***
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP***REMOVED***>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink ***REMOVED***;
