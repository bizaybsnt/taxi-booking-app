const express = require('express');
const router = express.Router();
const Driver = require('../controllers/DriverController');

const { isLoggedIn } = require('../middleware/auth');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token, Authorization'
  );
  next();
});

router.post('/login', Driver.login);
router.post('/register', Driver.register);
router.get('/profile', [isLoggedIn], Driver.getProfile);

router.get('/passenger/nearBy', [isLoggedIn], Driver.getNearByPassenger);
router.put('/respond/passenger/nearBy', [isLoggedIn], Driver.respondPassenger);

router.get('/ride/history', [isLoggedIn], Driver.rideHistory);

module.exports = router;
