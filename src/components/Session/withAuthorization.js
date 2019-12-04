import React from 'react';
import { withRouter ***REMOVED*** from 'react-router-dom';
import { compose ***REMOVED*** from 'recompose';
import AuthUserContext from './context';
import { withFirebase ***REMOVED*** from '../Firebase';
import * as ROUTES from '../../constants/routes';
const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(ROUTES.SIGN_IN);
      ***REMOVED***
    ***REMOVED***);
  ***REMOVED***
    componentWillUnmount() {
      this.listener();
  ***REMOVED***
    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props***REMOVED*** /> : null
        ***REMOVED***
        </AuthUserContext.Consumer>
      );
  ***REMOVED***
***REMOVED***
  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
***REMOVED***;
export default withAuthorization;