import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import LoginPage from '../screens/login/login';
import Home from '../screens/home/home';
import Register from '../screens/register/register';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
