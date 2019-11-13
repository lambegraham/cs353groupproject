import React, { Component ***REMOVED*** from 'react';
import { withFirebase ***REMOVED*** from '../Firebase';
const PasswordChange = () => (
  <div>
    <h1>PasswordChange</h1>
  </div>
);

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
***REMOVED***
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value ***REMOVED***);
***REMOVED***
  render() {
    const { passwordOne, passwordTwo, error ***REMOVED*** = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
    return (
      <form onSubmit={this.onSubmit***REMOVED***>
        <input
          name="passwordOne"
          value={passwordOne***REMOVED***
          onChange={this.onChange***REMOVED***
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo***REMOVED***
          onChange={this.onChange***REMOVED***
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid***REMOVED*** type="submit">
          Reset My Password
        </button>
        {error && <p>{error.message***REMOVED***</p>***REMOVED***
      </form>
    );
***REMOVED***
***REMOVED***
export default withFirebase(PasswordChangeForm);

export default PasswordChange;
