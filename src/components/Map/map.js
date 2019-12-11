import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const mapTile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mapAttr =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const zoomLevel = 18;
const mapStyle = { height: '500px', margin: '20px' };

class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    navigator.geolocation.getCurrentPosition(this.location, this.error, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });

    this.state = { mapCenter: [0, 0], locationPermission: false };
  }

  location = pos => {
    var crd = pos.coords;
    this.setState({
      mapCenter: [crd.latitude, crd.longitude],
      locationPermission: true
    });
  };

  error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    this.setState({ locationPermission: false });
  };
  render() {
    return this.state.locationPermission ? (
      <Map center={this.state.mapCenter} zoom={zoomLevel} style={mapStyle}>
        <TileLayer attribution={mapAttr} url={mapTile} />
        <Marker position={this.state.mapCenter}>
          <Popup>Your Location</Popup>
        </Marker>
        {this.props.children}
      </Map>
    ) : (
      <div>Allow location to use this app</div>
    );
  }
}

export default MapComponent;
