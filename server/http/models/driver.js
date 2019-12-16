'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    full_name: DataTypes.STRING,
    password: DataTypes.STRING,
    license_no: DataTypes.STRING,
    taxi_no: DataTypes.STRING,
    availability: DataTypes.BOOLEAN,
    location: DataTypes.JSONB
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
  };
  return Driver;
};