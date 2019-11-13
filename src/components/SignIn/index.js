import React, { Component ***REMOVED*** from 'react';
import { withRouter ***REMOVED*** from 'react-router-dom';
import { compose ***REMOVED*** from 'recompose';
import { SignUpLink ***REMOVED*** from '../SignUp';
import { withFirebase ***REMOVED*** from '../Firebase';
import * as ROUTES from '../../constants/routes';
const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
***REMOVED***;
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE ***REMOVED***;
***REMOVED***
  onSubmit = event => {
    const { email, password ***REMOVED*** = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE ***REMOVED***);
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error ***REMOVED*** = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit***REMOVED***>
        <input
          name="email"
          value={email***REMOVED***
          onChange={this.onChange***REMOVED***
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password***REMOVED***
          onChange={this.onChange***REMOVED***
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid***REMOVED*** type="submit">
          Sign In
        </button>
        {error && <p>{error.message***REMOVED***</p>***REMOVED***
      </form>
    );
***REMOVED***
***REMOVED***
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm ***REMOVED***;