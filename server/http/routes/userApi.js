const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const { isLoggedIn, isUser } = require('../middleware/auth');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.get('/profile', [isLoggedIn, isUser], UserController.getProfile);

router.get('/taxi/nearBy', [isLoggedIn, isUser], UserController.getTaxi);
router.post('/taxi/book', [isLoggedIn, isUser], UserController.bookTaxi);

router.get('/ride/history', [isLoggedIn, isUser], UserController.rideHistory);

module.exports = router;
