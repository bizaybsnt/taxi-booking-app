import React, { useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import authService from '../../services/authService';

const Login = () => {
  const history = useHistory();
  const location = useLocation();

  const [email, setEmail] = useState('john@gmail.com');
  const [password, setPassword] = useState('password');

  const { from } = location.state || { from: { pathname: '/' } };
  const handleLogin = (userType, data) => {
    authService.authenticate({ userType, data }, () => {
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
            name="email"
            onChange={d => setEmail(d.target.value)}
            value={email}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={d => setPassword(d.target.value)}
            value={password}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => handleLogin('user', { email, password })}
        >
          Login as User
        </Button>{' '}
        <Button
          variant="primary"
          onClick={() => handleLogin('driver', { email, password })}
        >
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
