import React from 'react';
import CRUD from '../CRUD/CRUD.js'
import { withAuthorization ***REMOVED*** from '../Session';

const Home = () => (
  <div class = "container">
    <h1>Home</h1>
    <body>
      <CRUD/>
    </body>    
  </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);