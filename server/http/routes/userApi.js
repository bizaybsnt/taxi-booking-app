const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const { isLoggedIn } = require('../middleware/auth');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token, Authorization'
  );
  next();
});

router.post('/login', UserController.login);

router.post('/register', UserController.register);
router.get('/profile', [isLoggedIn], UserController.getProfile);

router.get('/taxi/nearBy', [isLoggedIn], UserController.getTaxi);
router.post('/taxi/book', [isLoggedIn], UserController.bookTaxi);

router.get('/ride/history', [isLoggedIn], UserController.rideHistory);

module.exports = router;
