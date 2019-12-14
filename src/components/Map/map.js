import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { myLocIcon } from '../mapIcons/icons';
import MarkerWithPopup from './marker';

const mapTile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mapAttr =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const zoomLevel = 18;
const mapStyle = { height: '500px', margin: '20px' };

const MapComponent = props => {
  const { mapCenter, ownLocation, locationPermission } = props;
  return locationPermission ? (
    <Map center={mapCenter} zoom={zoomLevel} style={mapStyle}>
      <TileLayer attribution={mapAttr} url={mapTile} />

      <MarkerWithPopup
        icon={myLocIcon}
        position={ownLocation}
        popUp={<h5>My Location</h5>}
      />

      {props.children}
    </Map>
  ) : (
    <div>Allow location to use this app</div>
  );
};

export default MapComponent;
