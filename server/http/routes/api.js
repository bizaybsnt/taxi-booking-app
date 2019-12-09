const express = require('express');
const router = express.Router();
const Api = require('../controllers/ApiController');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.get('/', Api.index);

module.exports = router;
