import React, { Component } from 'react';
import { Header } from '../../components/header';
import authService from '../../services/authService';
import driverService from '../../services/driverService';
import userService from '../../services/userService';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, rideHistory: [] };
  }

  componentDidMount() {
    if (authService.isDriver) {
      driverService.getProfile().then(user => this.setState({ user }));
      driverService
        .getRideHistory()
        .then(rideHistory => this.setState({ rideHistory }));
    } else if (authService.isPassenger) {
      userService.getProfile().then(user => this.setState({ user }));
      userService
        .getRideHistory()
        .then(rideHistory => this.setState({ rideHistory }));
    }
  }
  render() {
    const { user, rideHistory } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="container py-4">
          <u>
            <h4 className="mb-3">User Profile</h4>
          </u>
          <div className="row">
            <div className="col-md-6">
              <h6>{user.full_name}</h6>
              <h6>{user.phone}</h6>
              <h6>{user.email}</h6>
              <h6>{user.license_no && `License Number: ${user.license_no}`}</h6>
              <h6>{user.taxi_no && `Taxi Number: ${user.taxi_no}`}</h6>
            </div>
            <div className="col-md-12">
              <u>
                <h5 className="mt-2">
                  <span className="fa fa-clock-o ion-clock float-right"></span>
                  Recent Activity
                </h5>
              </u>
              <table className="table table-sm table-hover table-striped">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {rideHistory.map(ride => (
                    <tr key={ride.id}>
                      <td>{ride.createdAt}</td>
                      <td>{ride.from}</td>
                      <td>{ride.to}</td>
                      <td>{ride.remarks.rideStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
