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
    try {
      let res = await Api.get('/user/profile');
      return res.body;
    } catch (error) {
      return false;
    }
  };

  getRideHistory = async () => {

    try {
      let res = await Api.get('/user/ride/history');
      return res.body;
    } catch (error) {
      return false;
    }
  };

  postRideRequest = async data => {};
}

export default new userService();
