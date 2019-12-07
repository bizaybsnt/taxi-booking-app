import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import LoginPage from '../screens/login/login';
import Home from '../screens/home/home';
import Profile from '../screens/profile/profile';
import { DriverRegister, UserRegister } from '../screens/register';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/register/driver">
            <DriverRegister />
          </Route>
          <Route path="/register/user">
            <UserRegister />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
