import React from 'react';
import styled from 'styled-components';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import authService from '../../services/authService';
import useSignUpForm from './signUpHooks';

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  const { from } = location.state || { from: { pathname: '/' } };
  const login = userType => {
    authService.authenticate({ userType, inputs }, () => {
      history.replace(from);
    });
  };

  return (
    <div className="container py-4 col-md-4">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
        </Form.Group>
        <Button variant="primary" onClick={() => login('passenger')}>
          Login as User
        </Button>{' '}
        <Button variant="primary" onClick={() => login('driver')}>
          Login as Driver
        </Button>
        <hr />
        <h3>Don't Have an Account?</h3>
        <h4>Register Here.</h4>
        <Link className="btn btn-secondary" to="/register/user">
          Sign up as User
        </Link>{' '}
        <Link className="btn btn-secondary" to="/register/driver">
          Sign up as Driver
        </Link>
      </Form>
    </div>
  );
};

export default Login;
