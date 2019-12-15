import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import authService from '../../services/authService';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    const { userType } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <Link className="navbar-brand" to="/">
          Taxi Booking App {userType && `(${userType})`}
        </Link>

        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <span
              className="btn nav-link"
              onClick={() => {
                authService.signout(() => this.props.history.push('/'));
              }}
            >
              Sign out
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
