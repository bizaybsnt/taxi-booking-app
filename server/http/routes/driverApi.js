const express = require('express');
const router = express.Router();
const Driver = require('../controllers/DriverController');

const { isLoggedIn, isDriver } = require('../middleware/auth');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.get('/login', Driver.login);
router.post('/register', Driver.register);
router.get('/profile', [isLoggedIn, isDriver], Driver.getProfile);

router.get('/passenger/nearBy', [isLoggedIn, isDriver], Driver.getNearByPassenger);
router.put('/respond/passenger/nearBy', [isLoggedIn, isDriver], Driver.respondPassenger);

router.get('/ride/history', [isLoggedIn, isDriver], Driver.rideHistory);

module.exports = router;
