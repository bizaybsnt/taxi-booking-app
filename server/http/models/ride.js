'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ride = sequelize.define('Ride', {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    driver_id: DataTypes.INTEGER,
    remarks: DataTypes.JSONB
  }, {});
  Ride.associate = function(models) {
    // associations can be defined here
  };
  return Ride;
};