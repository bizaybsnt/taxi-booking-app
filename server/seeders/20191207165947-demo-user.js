'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          fullName: 'John Doe',
          email: 'john@gmail.com',
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
