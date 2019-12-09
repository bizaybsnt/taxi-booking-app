module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'ride',
      [
        {
          from: JSON.stringify({
            lat: '27.712020',
            long: '85.312950',
            place: 'Dhapakhel'
          }),
          to: JSON.stringify({
            lat: '27.712020',
            long: '85.312950',
            place: 'Dhapakhel'
          }),
          userId: 1,
          driverId: 1,
          remarks: JSON.stringify({ rideStatus: 'called' })
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
