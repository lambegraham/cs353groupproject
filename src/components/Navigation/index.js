import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
//don't edit above or the world will explode -G

import { AuthUserContext ***REMOVED*** from '../Session';
import SignOutButton from '../SignOut';
import React from 'react';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href={ROUTES.LANDING***REMOVED***>Grades Calculator</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>

      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
      ***REMOVED***
      </AuthUserContext.Consumer>

    </Navbar.Collapse>
  </Navbar>
);

const NavigationAuth = () => (
  <Navbar>
    <Nav.Link href={ROUTES.HOME***REMOVED***>Home</Nav.Link>
    <Nav.Link href={ROUTES.ACCOUNT***REMOVED***>Account</Nav.Link>
    <Nav.Link href={ROUTES.ADMIN***REMOVED***>Admin</Nav.Link>
    <SignOutButton/>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar>
    <Form inline>
    <Nav.Link href={ROUTES.SIGN_IN***REMOVED***>Sign In</Nav.Link>
  </Form></Navbar>
);

export default Navigation;