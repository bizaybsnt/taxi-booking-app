const { User, Ride } = require('../models');

exports.login = (req, res) => {
  User.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};

exports.register = (req, res) => {
  User.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
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
