const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'drivers',
      [
        {
          fullName: 'Driver John',
          email: 'driver@gmail.com',
          licenseNo: '12345',
          taxiNo: 'BA 1 Pa 1234',
          available: true,
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
