import Api from './api';

class userService {
  register = async data => {
    try {
      let res = await Api.post('/user/register', data);
      return res.body;
    } catch (error) {
      return false;
    }
  };
  getDriverLocation = async query => {
    try {
      let res = await Api.get('/user/taxi/nearBy');
      return res.body;
    } catch (error) {
      return false;
    }
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

  postRideRequest = async data => {};
}

export default new userService();
