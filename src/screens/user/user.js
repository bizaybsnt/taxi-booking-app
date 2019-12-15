import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Marker, Popup } from 'react-leaflet';
import { Map } from '../../components/Map';
import { Header } from '../../components/header';
import { carIcon } from '../../components/mapIcons';
import * as UserAction from './userAction';
import UserService from '../../services/userService';

class User extends Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition(this.location, this.error, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });

    this.state = {
      mapCenter: [0, 0],
      rideStatus: null,
      locationPermission: false
    };
  }

  componentDidMount() {
    this.props.getDriverLocation();
    this.props.getRideInfo();
  }

  location = pos => {
    var crd = pos.coords;
    this.setState({
      mapCenter: [crd.latitude, crd.longitude],
      ownLocation: [crd.latitude, crd.longitude],
      pickUp: [crd.latitude, crd.longitude],
      drop: [crd.latitude, crd.longitude],
      locationPermission: true
    });
  };

  error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    this.setState({ locationPermission: false });
  };

  bookRide = () => {
    this.props.postRideRequest();
    this.setState({
      rideStatus: 'requested'
    });
    //submit ride post request
  };

  cancelRide = () => {
    //cancel post request for particular id
  };

  getButton = () => {
    const { rideStatus } = this.state;

    if (rideStatus === 'requested') {
      return (
        <React.Fragment>
          <button className="btn btn-primary" disabled>
            Requested
          </button>{' '}
          <button className="btn btn-danger" onClick={this.cancelRide}>
            Cancel Request
          </button>
        </React.Fragment>
      );
    }
    return (
      <button className="btn btn-primary" onClick={this.bookRide}>
        Book Now
      </button>
    );
  };

  renderDriverMarker = driver => {
    const { rideInfo } = this.props;
    let ride;
    if (rideInfo.driverId === driver.id) {
      ride = rideInfo;
    }
    console.log(rideInfo);
    return (
      <Marker
        icon={carIcon}
        position={[`${driver.location.lat}`, `${driver.location.lng}`]}
        key={driver.id}
      >
        <Popup>
          <h5>Drivers Details</h5>
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{driver.name}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{driver.phone}</td>
              </tr>
              <tr>
                <td>Taxi Number</td>
                <td>{driver.taxiNo}</td>
              </tr>
              <tr>
                <td>Pick Up</td>
                <td>
                  <input
                    className="form-control w-auto"
                    type="text"
                    name="pickUp"
                    defaultValue={ride && ride.pickUp}
                  />
                </td>
              </tr>
              <tr>
                <td>Drop</td>
                <td>
                  <input
                    className="form-control w-auto"
                    type="text"
                    name="drop"
                    
                    defaultValue={ride && ride.drop}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {this.getButton()}
        </Popup>
      </Marker>
    );
  };

  render() {
    const { driverLocation } = this.props;
    const { mapCenter, ownLocation, locationPermission } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Map
          mapCenter={mapCenter}
          ownLocation={ownLocation}
          locationPermission={locationPermission}
        >
          {driverLocation.map(driver => this.renderDriverMarker(driver))}
        </Map>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  driverLocation: state.user.driverLocation,
  rideInfo: state.user.rideInfo
});

const mapDispatchToProps = dispatch => ({
  getDriverLocation: () => {
    UserService.getDriverLocation()
      .then(response => {
        dispatch(UserAction.driverLocationFetched(response));
      })
      .catch(error => {
        dispatch(UserAction.driverLocationError({ error }));
      });
  },
  getRideInfo: () => {
    UserService.getRideInfo()
      .then(response => {
        dispatch(UserAction.rideInfoFetched(response));
      })
      .catch(error => {
        dispatch(UserAction.rideInfoError({ error }));
      });
  },
  postRideRequest: () => {
    UserService.postRideRequest()
      .then(response => {
        dispatch(UserAction.rideInfoFetched(response));
      })
      .catch(error => {
        dispatch(UserAction.rideInfoError({ error }));
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
