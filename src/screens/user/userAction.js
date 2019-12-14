export function driverLocationFetched(payload) {
  return {
    type: 'DRIVER_LOCATION_FETCHED',
    payload
  };
}

export function driverLocationError() {
  return {
    type: 'DRIVER_LOCATION_ERROR'
  };
}

export function rideInfoFetched(payload) {
  return {
    type: 'RIDE_INFO_FETCHED',
    payload
  };
}

export function rideInfoError() {
  return {
    type: 'RIDE_INFO_ERROR'
  };
}