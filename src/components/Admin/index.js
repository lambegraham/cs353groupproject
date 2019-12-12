import React, {
  Component
***REMOVED*** from 'react';
import {
  withFirebase
***REMOVED*** from '../Firebase';
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
  ***REMOVED***
***REMOVED***
  componentDidMount() {
    this.setState({
      loading: true
  ***REMOVED***);
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
    ***REMOVED***));
      this.setState({
        users: usersList,
        loading: false,
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***
  componentWillUnmount() {
    this.props.firebase.users().off();
***REMOVED***
  render() {
    const { users, loading ***REMOVED*** = this.state;
    return (
      <div>
        <h1>Admin</h1>
        {loading && <div>Loading ...</div>***REMOVED***
        <UserList users={users***REMOVED*** />
      </div>
    );
***REMOVED***
***REMOVED***

const UserList = ({ users ***REMOVED***) => (
  <ul>
    {users.map(user => (
      <li key={user.uid***REMOVED***>
        <span>
          <strong>ID:</strong> {user.uid***REMOVED***
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email***REMOVED***
        </span>
        <span>
          <strong>Username:</strong> {user.username***REMOVED***
        </span>
      </li>
    ))***REMOVED***
  </ul>
);
export default withFirebase(AdminPage);