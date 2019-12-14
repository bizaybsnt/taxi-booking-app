import React, { Component } from 'react';
import { Map } from '../../components/Map';
import { Header } from '../../components/header';
import { Marker, Popup } from 'react-leaflet';

class Driver extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Map>
          <Marker position={[27.666, 85.3227]}>
            <Popup>Drivers Location</Popup>
          </Marker>
        </Map> */}
      </React.Fragment>
    );
  }
}

export default Driver;
