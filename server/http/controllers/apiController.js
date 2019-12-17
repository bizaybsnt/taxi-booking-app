exports.verifyToken = (req, res) => {
  res.json(res.locals.user);
};
