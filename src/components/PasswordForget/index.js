import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

//styling stuff 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PasswordForget = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <div class="container">
        <h2>Forgot Password?</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Enter your email below and we'll send you a link to reset your password.</Form.Label>
            <Form.Control input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <Form.Text className="text-muted">
              Never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Button disabled={isInvalid} type="submit">
            Reset My Password
        </Button>
          {error && <p>{error.message}</p>}
        </Form>
      </div>
    );
  }
}
const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);
export default PasswordForget;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };
