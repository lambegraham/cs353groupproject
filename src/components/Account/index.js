import React from 'react';
import { AuthUserContext, withAuthorization ***REMOVED*** from '../Session';
import { PasswordForgetForm ***REMOVED*** from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.uid***REMOVED***</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )***REMOVED***
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);