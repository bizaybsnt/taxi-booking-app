const jwt = require('jsonwebtoken');
const { User, Driver } = require('../models');

exports.isLoggedIn = function(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' });

    User.findOne({ where: { id: decoded.id, email: decoded.email } }).then(
      user => {
        if (user) {
          res.locals.user = {
            id: user.id,
            full_name: user.full_name,
            email: user.email,
            phone: user.phone,
            user_type: 'user'
          };
          return next();
        } else {
          Driver.findOne({
            where: { id: decoded.id, email: decoded.email }
          }).then(driver => {
            if (driver) {
              res.locals.user = {
                id: driver.id,
                full_name: driver.full_name,
                email: driver.email,
                phone: driver.phone,
                license_no: driver.license_no,
                taxi_no: driver.taxi_no,
                user_type: 'driver'
              };
              return next();
            } else {
              return res.status(404).send('No user found.');
            }
          });
        }
      }
    );
  });
};
