import React, { Component ***REMOVED*** from 'react';
import { Link, withRouter ***REMOVED*** from 'react-router-dom';
import { compose ***REMOVED*** from 'recompose';

import { withFirebase ***REMOVED*** from '../Firebase';
import * as ROUTES from '../../constants/routes';
***REMOVED***
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    const { username, email, passwordOne ***REMOVED*** = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
        ***REMOVED***);
    ***REMOVED***)
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
      <Form onSubmit={this.onSubmit***REMOVED***>
        <Form.Group>
        <Form.Control input
          name="username"
          value={username***REMOVED***
          onChange={this.onChange***REMOVED***
          type="text"
          placeholder="Full Name"
        />
                </Form.Group>

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
          name="passwordOne"
          value={passwordOne***REMOVED***
          onChange={this.onChange***REMOVED***
          type="password"
          placeholder="Password"
        />
                </Form.Group>

<Form.Group>
<Form.Control input
          name="passwordTwo"
          value={passwordTwo***REMOVED***
          onChange={this.onChange***REMOVED***
          type="password"
          placeholder="Confirm Password"
        />
        </Form.Group>
        
        <Button variant="primary" disabled={isInvalid***REMOVED*** type="submit">Sign Up</Button>

        {error && <p>{error.message***REMOVED***</p>***REMOVED***
        </Form>
    );
***REMOVED***
***REMOVED***

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP***REMOVED***>Sign Up</Link>
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink ***REMOVED***;