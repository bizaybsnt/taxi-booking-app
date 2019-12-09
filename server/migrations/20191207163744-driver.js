'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('drivers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullName: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      licenseNo: Sequelize.STRING,
      taxiNo: Sequelize.STRING,
      available: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      location: Sequelize.JSONB,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('drivers');
  }
};
