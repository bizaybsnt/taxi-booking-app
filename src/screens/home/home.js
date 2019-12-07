import React from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../../services/authService';
import DriverHome from '../driver/driver';
import PassengerHome from '../passenger/passenger';

const Home = () => {
  let history = useHistory();
  return (
    <div>
      {authService.isDriver && <DriverHome />}
      {authService.isPassenger && <PassengerHome />}
      <button
        onClick={() => {
          authService.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Home;
