import React, { Component ***REMOVED*** from 'react';
import { withRouter ***REMOVED*** from 'react-router-dom';
import { compose ***REMOVED*** from 'recompose';
import { SignUpLink ***REMOVED*** from '../SignUp';
import { PasswordForgetLink ***REMOVED*** from '../PasswordForget';
import { withFirebase ***REMOVED*** from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignInPage = () => (
  <div>
    <SignInForm />
    <PasswordForgetLink />    
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
      <div class="container">
      <h1>Sign In</h1>
      <Form onSubmit={this.onSubmit***REMOVED***>
        <Form.Group>
        <Form.Control input
          name="email"
          value={email***REMOVED***
          onChange={this.onChange***REMOVED***
          type="text"
          placeholder="Email Address"
        />
        </Form.Group>

        <Form.Group>
        <Form.Control input
          name="password"
          value={password***REMOVED***
          onChange={this.onChange***REMOVED***
          type="password"
          placeholder="Password"
        />
        </Form.Group>
        
        <Button variant="primary" disabled={isInvalid***REMOVED*** type="submit">
          Sign In
        </Button>
        {error && <p>{error.message***REMOVED***</p>***REMOVED***
      </Form>
      <SignUpLink />
      </div>
    );
***REMOVED***
***REMOVED***
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm ***REMOVED***;