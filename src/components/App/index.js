import React, { Component ***REMOVED*** from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
***REMOVED*** from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withFirebase ***REMOVED*** from '../Firebase';
import { AuthUserContext ***REMOVED*** from '../Session';
import { withAuthentication ***REMOVED*** from '../Session';

const App = () => (
    <Router>
      <div>
      <Navigation />
        <hr/>
        <Route exact path={ROUTES.LANDING***REMOVED*** component={LandingPage***REMOVED*** />
        <Route path={ROUTES.SIGN_UP***REMOVED*** component={SignUpPage***REMOVED*** />
        <Route path={ROUTES.SIGN_IN***REMOVED*** component={SignInPage***REMOVED*** />
        <Route path={ROUTES.PASSWORD_FORGET***REMOVED*** component={PasswordForgetPage***REMOVED*** />
        <Route path={ROUTES.HOME***REMOVED*** component={HomePage***REMOVED*** />
        <Route path={ROUTES.ACCOUNT***REMOVED*** component={AccountPage***REMOVED*** />
        <Route path={ROUTES.ADMIN***REMOVED*** component={AdminPage***REMOVED*** />
      </div>
    </Router>
    );
    
    export default withAuthentication(App);
