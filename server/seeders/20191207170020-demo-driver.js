const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Drivers',
      [
        {
          full_name: 'Driver John',
          email: 'driver@gmail.com',
          phone: '9847474747',
          license_no: '12345',
          taxi_no: 'BA 1 Pa 1234',
          availability: true,
          location: JSON.stringify({
            lat: '27.712020',
            long: '85.312950',
            place: 'Dhapakhel'
          }),
          password: bcrypt.hashSync('password', saltRounds)
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
