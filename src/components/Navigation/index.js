import React from 'react';
//import { Link ***REMOVED*** from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';


const Navigation = () => (
  // <div>
  //   <ul>
  //     <li>
  //       <Link to={ROUTES.SIGN_IN***REMOVED***>Sign In</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.SIGN_UP***REMOVED***>Sign Up</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.LANDING***REMOVED***>Landing</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.HOME***REMOVED***>Home</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.ACCOUNT***REMOVED***>Account</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.ADMIN***REMOVED***>Admin</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.PASSWORD_FORGET***REMOVED***>PasswordForget</Link>
  //     </li>
  //   </ul>
  // </div>


  <Navbar bg="light" expand="lg">
    <Navbar.Brand href={ROUTES.LANDING***REMOVED***>Grades Calculator</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

        <Nav.Link href={ROUTES.HOME***REMOVED***>Home</Nav.Link>
        <Nav.Link href={ROUTES.ACCOUNT***REMOVED***>Account</Nav.Link>
        <Nav.Link href={ROUTES.ADMIN***REMOVED***>Admin</Nav.Link>

        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */***REMOVED***

      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> */***REMOVED***
      <Form inline>
        <Nav.Link href={ROUTES.SIGN_IN***REMOVED***>Sign In</Nav.Link>
        <Nav.Link href={ROUTES.SIGN_UP***REMOVED***>Sign Up</Nav.Link>
        </Form>
    </Navbar.Collapse>
  </Navbar>

);
export default Navigation;
