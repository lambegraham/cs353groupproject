import React from 'react';
import { withFirebase ***REMOVED*** from '../Firebase';
const SignOutButton = ({ firebase ***REMOVED***) => (
  <button type="button" onClick={firebase.doSignOut***REMOVED***>
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);