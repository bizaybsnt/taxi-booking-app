// getUserRoute
// postUserRoute

// startRide
// BookRide
// completeRide

// getProfileInfo
// getRideHistory

import Api from './api';

class userService {
  getDriverLocation = async query => {
    return [
      {
        id: 1,
        taxiNo: '1234',
        phone: '9841989898',
        name: 'John Doe',
        location: { lat: 27.695051796192736, lng: 85.34427523612977 }
      },
      {
        id: 2,
        taxiNo: '567',
        phone: '9841989898',
        name: 'Mary Com',
        location: { lat: 27.69491405083671, lng: 85.34598112106325 }
      }
    ];
  };

  getRideInfo = async query => {
    return { 
      pickUp: 'dhapakhel',
      drop: ' lagankhel',
      driverId: 1,
      remark: { rideStatus: 'requested' }
    };
  };

  getProfile = async () => {
    return {
      fullName: 'Bijay Basnet',
      address: 'Dhapakhel',
      email: 'bsnt.bizay@gmail.com'
    };
  };

  getRideHistory = async () => {
    return [
      {
        time: '2019-12-08 08:30:49',
        from: { lat: 27.695051796192736, lng: 85.34427523612977 },
        to: { lat: 27.69491405083671, lng: 85.34598112106325 },
        distance: '22m',
        remark: { rideStatus: 'requested' }
      }
    ];
  };

  postRideRequest = async () => {
    return {
      pickUp: { lat: 27.695051796192736, lng: 85.34427523612977 },
      drop: { lat: 27.69491405083671, lng: 85.34598112106325 },
      driverId: 2,
      remark: { rideStatus: 'requested' }
    };
  };
}

export default new userService();
