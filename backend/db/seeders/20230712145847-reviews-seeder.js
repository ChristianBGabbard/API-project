'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 5,
        spotId: 1,
        "review": "Sick hideaway, super place to relax and take in the nature.",
        "stars": 5.0
      },
      {
        userId: 6,
        spotId: 1,
        "review": "This was a very unique experience\nCannot wait to come back!",
        "stars": 5.0
      },
      {
        userId: 7,
        spotId: 1,
        "review": "Martin was very reachable when we had a minor housekeeping concern on check in and was quick to mediate the problem. After the issue was resolved our stay was excellent.",
        "stars": 5.0
      },
      {
        userId: 8,
        spotId: 1,
        "review": "Great experience and location for a scenic getaway!",
        "stars": 5.0
      },
      {
        userId: 9,
        spotId: 1,
        "review": "The views were so beautiful. The morning we were getting ready to leave there were 6 or more deer in the field below. It was so peaceful and we absolutely loved it.",
        "stars": 5.0
      },
      {
        userId: 10,
        spotId: 1,
        "review": "We had a blast. Five stars all around, will definitely be back.",
        "stars": 5.0
      },
      {
        userId: 11,
        spotId: 1,
        "review": "We really enjoyed staying here! It was the perfect quiet weekend! The property is easy to find; it was close to historic downtown and lots of outdoor recreation. Can't wait to come back!",
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
