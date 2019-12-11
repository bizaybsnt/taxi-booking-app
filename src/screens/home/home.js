import React from 'react';
import authService from '../../services/authService';
import DriverHome from '../driver/driver';
import UserHome from '../user/user';

const Home = () => {
  return <div>{authService.isDriver ? <DriverHome /> : <UserHome />}</div>;
};

export default Home;
