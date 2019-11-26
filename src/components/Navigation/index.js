//import { Link ***REMOVED*** from 'react-router-dom';
// import FormControl from 'react-bootstrap/FormControl';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
import { AuthUserContext ***REMOVED*** from '../Session';
import SignOutButton from '../SignOut';

import React from 'react';
import { Link ***REMOVED*** from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
    ***REMOVED***
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING***REMOVED***>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME***REMOVED***>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT***REMOVED***>Account</Link>
    </li>
    <li>
      <SignOutButt/>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING***REMOVED***>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN***REMOVED***>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;

{/* <Navbar.Brand href={ROUTES.LANDING***REMOVED***>Grades Calculator</Navbar.Brand>
const Navigation = () => (
  <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
    ***REMOVED***
    </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <Form inline>
    <Nav.Link href={ROUTES.HOME***REMOVED***>Home</Nav.Link>
    <Nav.Link href={ROUTES.ACCOUNT***REMOVED***>Account</Nav.Link>
    <Nav.Link href={ROUTES.ADMIN***REMOVED***>Admin</Nav.Link>
    <SignOutButton/>
  </Form>
);

const NavigationNonAuth = () => (
  <Form >
    <Nav.Link href={ROUTES.SIGN_IN***REMOVED***>Sign In</Nav.Link>
    <Nav.Link href={ROUTES.SIGN_UP***REMOVED***>Sign Up</Nav.Link>
    <Nav.Link href={ROUTES.LANDING***REMOVED***>Landing</Nav.Link>
  </Form>
); */***REMOVED***

//GRAHAMS WORK 
//  <Navbar bg="light" expand="lg">

// <Navbar.Toggle aria-controls="basic-navbar-nav" />
// <Navbar.Collapse id="basic-navbar-nav">
//   <Nav className="mr-auto">

//     <Nav.Link href={ROUTES.HOME***REMOVED***>Home</Nav.Link>
//     <Nav.Link href={ROUTES.ACCOUNT***REMOVED***>Account</Nav.Link>
//     <Nav.Link href={ROUTES.ADMIN***REMOVED***>Admin</Nav.Link>

//      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//       <NavDropdown.Divider />
//       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//     </NavDropdown> 

//   </Nav>
//    <Form inline>
//     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//     <Button variant="outline-success">Search</Button>
//   </Form> 
//   <Form inline>
//     <Nav.Link href={ROUTES.SIGN_IN***REMOVED***>Sign In</Nav.Link>
//     <Nav.Link href={ROUTES.SIGN_UP***REMOVED***>Sign Up</Nav.Link>
//     </Form>
// </Navbar.Collapse>
// </Navbar> 