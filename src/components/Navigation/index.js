import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
//don't edit above or the world will explode -G

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import React from 'react';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
const NavigationAuth = ({authUser}) => (

  <Navbar>
    <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
    <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
    {!!authUser.roles[ROLES.ADMIN] && (
        <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link>
    )}
    <SignOutButton/>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar>
    <Form inline>
    <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
  </Form></Navbar>
);
const Navigation = () => (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href={ROUTES.LANDING}>GradeTrak</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>

    </Navbar.Collapse>
  </Navbar>
);
export default Navigation;