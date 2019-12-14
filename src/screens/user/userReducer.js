const initialState = {
  driverLocation: [],
  rideInfo: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DRIVER_LOCATION_FETCHED':
      return { ...state, driverLocation: action.payload };
    case 'DRIVER_LOCATION_ERROR':
      return { ...state, driverLocationError: true };

    case 'RIDE_INFO_FETCHED':
      return { ...state, rideInfo: action.payload };
    case 'RIDE_INFO_ERROR':
      return { ...state, rideInfoError: true };

    default:
      return state;
  }
};
