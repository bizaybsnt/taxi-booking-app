import React, { Component } from 'react';
import { Header } from '../../components/header';
import RideRequest from './rideRequest';
import RideTable from './rideTable';

class Driver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rideAvailability: true
    };
  }
  render() {
    const { rideAvailability } = this.state;
    return (
      <React.Fragment>
        <Header userType="Rider" />
        <RideRequest rideAvailability={rideAvailability} />
        {rideAvailability && <RideTable />}
      </React.Fragment>
    );
  }
}

export default Driver;
