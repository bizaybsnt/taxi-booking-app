import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const MarkerWithPopup = ({ popUp, ...rest }) => {
  return (
    <Marker {...rest}>
      <Popup>{popUp}</Popup>
    </Marker>
  );
};

export default MarkerWithPopup;
