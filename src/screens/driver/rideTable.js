import React, { Component } from 'react';

class RideTable extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="text-center">Current Ride Request</h4>
        <table className="table table-sm table-hover table-striped mx-auto w-auto">
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
              <td>Dhapakhel</td>
              <td>Lagankhel</td>
              <td>22m</td>
              <td>
                <button className="btn btn-primary">Accept</button>{' '}
                <button className="btn btn-danger">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default RideTable;
