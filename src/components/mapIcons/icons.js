import L from 'leaflet';

const myLocIcon = L.icon({
  iconUrl: require('../../assets/images/user_location.png'),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -20],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

const pickUpIcon = L.icon({
  iconUrl: require('../../assets/images/pickup_pin.png'),
  iconSize: [16, 32],
  iconAnchor: [8, 48],
  popupAnchor: [0, -40],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

const dropIcon = L.icon({
  iconUrl: require('../../assets/images/drop_pin.png'),
  iconSize: [25, 32],
  iconAnchor: [8, 48],
  popupAnchor: [0, -40],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

const carIcon = L.icon({
  iconUrl: require('../../assets/images/car.png'),
  iconSize: [32, 32],
  iconAnchor: [8, 48],
  popupAnchor: [0, -40],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

export { myLocIcon, pickUpIcon, dropIcon, carIcon };
