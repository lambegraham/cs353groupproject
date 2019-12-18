import React from 'react';
import { withFirebase ***REMOVED*** from '../Firebase';
import Button from 'react-bootstrap/Button';

const SignOutButton = ({ firebase ***REMOVED***) => (
  <Button variant="primary" onClick={firebase.doSignOut***REMOVED*** href="/">
    Sign Out
  </Button>
);
export default withFirebase(SignOutButton);