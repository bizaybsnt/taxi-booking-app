const { User, Ride } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: { email }
  }).then(user => {
    console.log('User Found: ', user);
    if (user === null) {
      res.status(401).json({
        sucess: false,
        token: null,
        err: 'Invalid Credentials'
      });
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        console.log('Valid!');

        let token = jwt.sign(
          {
            email: user.email
          },
          'super secret',
          { expiresIn: '129600' }
        ); // Signing the token

        res.json({
          sucess: true,
          err: null,
          token
        });
      } else {
        console.log('Entered Password and Hash do not match!');
        res.status(401).json({
          sucess: false,
          token: null,
          err: 'Entered Password and Hash do not match!'
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
        sucess: false,
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
          res.json({ sucess: true, err: null });
        });
      });
    }
  });
};

exports.getProfile = (req, res) => {
  User.findOne().then(user => {
    res.json(user);
  });
};

exports.getTaxi = (req, res) => {
  User.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};

exports.bookTaxi = (req, res) => {
  User.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};

exports.rideHistory = (req, res) => {
  User.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};
