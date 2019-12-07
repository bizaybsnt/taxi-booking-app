import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import authService from '../../services/authService';

const Login = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  const login = (userType) => {
    authService.authenticate(userType, () => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view this page</p>
      <button onClick={() => login('driver')}>
        Log in as Driver
      </button>
      <button onClick={() => login('passenger')}>
        Log in as Passenger
      </button>
    </div>
  );
};

export default Login;
