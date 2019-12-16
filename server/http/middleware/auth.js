exports.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
    return next();
  }

  res.json({
    status: 401,
    message: 'Access denied'
  });
};

exports.isUser = function(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
    return next();
  }

  res.json({
    status: 401,
    message: 'Access denied'
  });
};

exports.isDriver = function(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
    return next();
  }

  res.json({
    status: 401,
    message: 'Access denied'
  });
};
