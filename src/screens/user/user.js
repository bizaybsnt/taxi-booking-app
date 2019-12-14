import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Marker, Popup } from 'react-leaflet';
import { Map } from '../../components/Map';
import { Header } from '../../components/header';
import { carIcon, pickUpIcon, dropIcon } from '../../components/mapIcons';
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
      pickUp: [0, 0],
      drop: [0, 0],
      showTooltip: true,
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
    //submit ride post request
  }

  renderDriverMarker = driver => {
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
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={this.bookRide}>
            Book Now
          </button>
        </Popup>
      </Marker>
    );
  };

  renderRideMarker = () => {
    const { showTooltip, ownLocation } = this.state;
    const { pickUp, drop } = this.props;
    const dropPos = drop ? [drop.lat, drop.lng] : ownLocation;
    const pickUpPos = pickUp ? [pickUp.lat, pickUp.lng] : ownLocation;
    return (
      <React.Fragment>
        <Marker
          icon={dropIcon}
          draggable={true}
          position={dropPos}
          onDragEnd={d =>
            this.setState({
              showTooltip: false,
              drop: [d.target._latlng.lat, d.target._latlng.lng],
              mapCenter: [d.target._latlng.lat, d.target._latlng.lng]
            })
          }
        >
          <Popup>
            <h4>Drop Location</h4>
            <p>Drag to change location</p>
          </Popup>
        </Marker>
        <Marker
          icon={pickUpIcon}
          draggable={true}
          position={pickUpPos}
          ref={ref => ref && showTooltip && ref.leafletElement.openPopup()}
          onDragEnd={d =>
            this.setState({
              showTooltip: false,
              pickUp: [d.target._latlng.lat, d.target._latlng.lng],
              mapCenter: [d.target._latlng.lat, d.target._latlng.lng]
            })
          }
        >
          <Popup>
            <h4>Pick Up Location</h4>
            <p>Drag to change location</p>
          </Popup>
        </Marker>
      </React.Fragment>
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
          {this.renderRideMarker()}
        </Map>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  driverLocation: state.user.driverLocation,
  pickUp: state.user.rideInfo.pickUp,
  drop: state.user.rideInfo.drop
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
