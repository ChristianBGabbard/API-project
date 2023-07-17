'use strict';

/** @type {import('sequelize-cli').Migration} */

const { User, Spot, Review, Booking, ReviewImage, SpotImage } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Review.bulkCreate([
      {
        spotId: 1,
        userId: 1,
        review: "Host was gracious and had good comunication. LA is just not my favorite place",
        stars: 3
      },
      {
        spotId: 2,
        userId: 2,
        review: "Wow! will most definitely be back!",
        stars: 5
      },
      {
        spotId: 3,
        userId: 3,
        review: "Overall, was very pleased with the experiance.",
        stars: 5
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options);
  }
};
