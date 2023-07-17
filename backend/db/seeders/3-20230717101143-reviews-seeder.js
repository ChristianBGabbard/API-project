'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        spotId: 1,
        "review": "Sick hideaway, super great place to relax and take in the nature.",
        "stars": 5.0
      },
      {
        userId: 2,
        spotId: 2,
        "review": "Top 5 experiences of all time!",
        "stars": 5.0
      },
      {
        userId: 3,
        spotId: 3,
        "review": "The host was very reachable and accomadating to out specific needs.",
        "stars": 5.0
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', {
      review: { [Op.in]: ["This was a bad spot!", "This was a good spot!"] }
    }, {});
  }
};
