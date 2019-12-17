const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/apiController');

const { isLoggedIn } = require('../middleware/auth');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token, Authorization'
  );
  next();
});

router.get('/verifyToken', [isLoggedIn], ApiController.verifyToken);

module.exports = router;
