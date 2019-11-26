import React from 'react';
import AuthUserContext from './context';
import { withFirebase ***REMOVED*** from '../Firebase';
const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          authUser: null,
      ***REMOVED***
    ***REMOVED***
      componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
          authUser => {
            authUser
              ? this.setState({ authUser ***REMOVED***)
              : this.setState({ authUser: null ***REMOVED***);
        ***REMOVED***,
        );
    ***REMOVED***
      componentWillUnmount() {
        this.listener();
    ***REMOVED***
    render() {
        return (
            <AuthUserContext.Provider value={this.state.authUser***REMOVED***>
              <Component {...this.props***REMOVED*** />
            </AuthUserContext.Provider>
      );
  ***REMOVED***
***REMOVED***
  return withFirebase(WithAuthentication);
***REMOVED***;
export default withAuthentication;