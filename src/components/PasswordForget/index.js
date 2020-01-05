import React, { Component ***REMOVED*** from 'react';
import { Link ***REMOVED*** from 'react-router-dom';
import { withFirebase ***REMOVED*** from '../Firebase';
import * as ROUTES from '../../constants/routes';

//styling stuff 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PasswordForget = () => (
  <div>
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
***REMOVED***;
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value ***REMOVED***);
***REMOVED***;
  render() {
    const { email, error ***REMOVED*** = this.state;
    const isInvalid = email === '';
    return (
      <div class="container">
        <h2>Forgot Password?</h2>
        <Form onSubmit={this.onSubmit***REMOVED***>
          <Form.Group>
            <Form.Label>Enter your email below and we'll send you a link to reset your password.</Form.Label>
            <Form.Control input
              name="email"
              value={this.state.email***REMOVED***
              onChange={this.onChange***REMOVED***
              type="text"
              placeholder="Email Address"
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
