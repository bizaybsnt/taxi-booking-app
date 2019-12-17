const { User, Ride, Driver } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: { email }
  }).then(user => {
    if (user === null) {
      res.status(401).json({
        success: false,
        token: null,
        err: 'Invalid Credentials'
      });
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        console.log('Valid!');

        let token = jwt.sign(
          {
            id: user.id,
            email: user.email
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
  const { full_name, email, phone, password } = req.body;

  User.findOne({
    where: { email }
  }).then(user => {
    if (user) {
      res.json({
        success: false,
        err: 'Email Already Exist'
      });
    } else {
      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, function(err, hash) {
        User.create({
          email: email,
          password: hash,
          full_name,
          phone
        }).then(result => {
          res.json({ success: 'Account Created Successfully', err: null });
        });
      });
    }
  });
};

exports.getProfile = (req, res) => {
  res.json(res.locals.user);
};

exports.getTaxi = (req, res) => {
  Driver.findAll({
    attributes: ['id', 'taxi_no', 'phone', 'full_name', 'location']
  }).then(driver => {
    res.json(driver);
  });
};

exports.bookTaxi = (req, res) => {
  User.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};

exports.rideHistory = (req, res) => {
  Ride.findAll({ where: { user_id: res.locals.user.id } }).then(ride => {
    res.json(ride);
  });
};
