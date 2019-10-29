import React from 'react';
import { Link ***REMOVED*** from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN***REMOVED***>Sign In</Link>
      </li>
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
        <Link to={ROUTES.ADMIN***REMOVED***>Admin</Link>
      </li>
    </ul>
  </div>
);
export default Navigation;
