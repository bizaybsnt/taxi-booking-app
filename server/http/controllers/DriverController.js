const { Driver, Ride } = require('../models');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Op = Sequelize.Op;

exports.login = (req, res) => {
  const { email, password } = req.body;
  Driver.findOne({
    where: { email }
  }).then(driver => {
    if (driver === null) {
      res.status(401).json({
        success: false,
        token: null,
        err: 'Invalid Credentials'
      });
    }
    bcrypt.compare(password, driver.password, function(err, result) {
      if (result === true) {
        console.log('Valid!');

        let token = jwt.sign(
          {
            id: driver.id,
            email: driver.email
          },
          process.env.JWT_SECRET,
          { expiresIn: '1hr' }
        ); // Signing the token

        res.json({
          success: true,
          err: null,
          token
        });
      } else {
        console.log('Entered Password and Hash do not match!');
        res.status(401).json({
          success: false,
          token: null,
          err: 'Entered Password do not match!'
        });
      }
    });
  });
};

exports.register = (req, res) => {
  const {
    full_name,
    email,
    phone,
    password,
    license_no,
    taxi_no,
    availability,
    location
  } = req.body;

  Driver.findOne({
    where: {
      [Op.or]: [{ email }, { taxi_no }, { license_no }]
    }
  }).then(driver => {
    if (driver) {
      res.json({
        success: false,
        err: 'User Already Exist'
      });
    } else {
      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, function(err, hash) {
        Driver.create({
          email: email,
          password: hash,
          full_name,
          phone,
          license_no,
          taxi_no,
          availability,
          location
        }).then(result => {
          res.json({ success: 'Driver user created successfully', err: null });
        });
      });
    }
  });
};

exports.getProfile = (req, res) => {
  res.json(res.locals.user);
};

exports.getNearByPassenger = (req, res) => {
  Driver.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};

exports.respondPassenger = (req, res) => {
  Driver.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};

exports.rideHistory = (req, res) => {
  Ride.findAll({ where: { driver_id: res.locals.user.id } }).then(ride => {
    res.json(ride);
  });
};
