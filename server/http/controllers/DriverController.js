const { Driver, Ride } = require('../models');

exports.login = (req, res) => {
  Driver.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};

exports.register = (req, res) => {
  Driver.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};

exports.getProfile = (req, res) => {
  Driver.findOne().then(user => {
    res.json(user);
  });
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
  Driver.findOne().then(user => {
    const { full_name, email, phone } = user;
    res.json({ full_name, email, phone });
  });
};
