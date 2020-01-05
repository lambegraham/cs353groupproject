import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
        <div class="container">
        <h2>Change password</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Enter your email below and we'll send you a link to reset your password.</Form.Label>
            <Form.Control input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="New Password"
            />
            
            <Form.Control input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm New Password"
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
    //   <form onSubmit={this.onSubmit}>
    //     <input
    //       name="passwordOne"
    //       value={passwordOne}
    //       onChange={this.onChange}
    //       type="password"
    //       placeholder="New Password"
    //     />
    //     <input
    //       name="passwordTwo"
    //       value={passwordTwo}
    //       onChange={this.onChange}
    //       type="password"
    //       placeholder="Confirm New Password"
    //     />
    //     <button disabled={isInvalid} type="submit">
    //       Reset My Password
    //     </button>

    //     {error && <p>{error.message}</p>}
    //   </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);