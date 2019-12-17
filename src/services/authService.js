import Api from './api';

class AuthService {
  isAuthenticated = false;
  isDriver = false;
  isPassenger = false;

  verifyToken = cb => {
    Api.get('/verifyToken').then(res => {
      if (res.body.user_type && res.body.user_type === 'driver') {
        this.isAuthenticated = true;
        this.isDriver = true;
        return true;
      } else if (res.body.user_type && res.body.user_type === 'user') {
        this.isAuthenticated = true;
        this.isPassenger = true;
        return true;
      } else return false;
    });
  };

  authenticate = ({ userType, data }, cb) => {
    localStorage.removeItem('token');

    if (userType === 'driver') {
      this.driverAuthenticate(cb, data);
    } else {
      this.passengerAuthenticate(cb, data);
    }
  };
  passengerAuthenticate = (cb, data) => {
    try {
      let res = Api.post('/user/login', data).then(res => {
        if (res.body.success) {
          localStorage.setItem('token', res.body.token);
          this.isAuthenticated = true;
          this.isDriver = false;
          this.isPassenger = true;
          cb();
        } else {
          alert(res.body.err);
        }
      });
      return res.body;
    } catch (error) {
      return false;
    }
  };

  driverAuthenticate = (cb, data) => {
    try {
      let res = Api.post('/driver/login', data).then(res => {
        if (res.body.success) {
          localStorage.setItem('token', res.body.token);
          this.isAuthenticated = true;
          this.isDriver = true;
          this.isPassenger = false;
          cb();
        } else {
          alert(res.body.err);
        }
      });
      return res.body;
    } catch (error) {
      return false;
    }
  };

  signout = cb => {
    this.isAuthenticated = false;
    this.isDriver = false;
    this.isPassenger = false;
    localStorage.removeItem('token');
    cb();
  };
}

export default new AuthService();
