class AuthService {
  isAuthenticated = false;
  isDriver = false;
  isPassenger = false;

  authenticate = (userType, cb) => {
    if (userType === 'driver') {
      this.driverAuthenticate(cb);
    } else {
      this.passengerAuthenticate(cb);
    }
  };
  passengerAuthenticate = cb => {
    this.isAuthenticated = true;
    this.isDriver = false;
    this.isPassenger = true;
    setTimeout(cb, 100); // fake async
  };

  driverAuthenticate = cb => {
    this.isAuthenticated = true;
    this.isDriver = true;
    this.isPassenger = false;
    setTimeout(cb, 100); // fake async
  };
  signout = cb => {
    this.isAuthenticated = false;
    this.isDriver = false;
    this.isPassenger = false;
    setTimeout(cb, 100);
  };
}

export default new AuthService();
