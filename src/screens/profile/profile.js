import React, { Component } from 'react';
import { Header } from '../../components/header';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container py-4">
          <u>
            <h4 className="mb-3">User Profile</h4>
          </u>
          <div className="row">
            <div className="col-md-6">
              <h6>Bijay Basnet</h6>
              <h6>Dhapakhel, Lalitpur</h6>
              <h6>bsnt.bizay@gmail.com</h6>
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
                    <th>Distance</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2019-12-08 08:30:49</td>
                    <td>[21,23]</td>
                    <td>[21,22]</td>
                    <td>22m</td>
                    <td>Completed</td>
                  </tr>

                  <tr>
                    <td>2019-12-08 08:30:49</td>
                    <td>[21,23]</td>
                    <td>[21,22]</td>
                    <td>22m</td>
                    <td>Cancelled</td>
                  </tr>
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
