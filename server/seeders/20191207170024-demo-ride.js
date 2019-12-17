module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Rides',
      [
        {
          from: 'Dhapakhel',
          to: 'Lagankhel',
          user_id: 1,
          driver_id: 1,
          remarks: JSON.stringify({ rideStatus: 'requested' })
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
