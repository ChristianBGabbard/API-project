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
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: "123 Caswell Ave",
        city: "Mar Vista",
        state: "California",
        country: "USA",
        lat: 26.052235,
        lng: -134.243683,
        name: "Amazing",
        description: "Close to the beach",
        price: 255.00
      },
      {
        ownerId: 2,
        address: "444 Valley Rd",
        city: "Anchorage",
        state: "Alaska",
        country: "USA",
        lat: 32.605209,
        lng: -119.342041,
        name: "Snow Days",
        description: "Beautiful Nature immersed in the snow",
        price: 70.00
      },
      {
        ownerId: 3,
        address: "235 Ranger Rd",
        city: "Tuscan",
        state: "Arizona",
        country: "USA",
        lat: 26.878113,
        lng: -95.629794,
        name: "Beautiful Sunset",
        description: "Quite times and No polution",
        price: 150.00
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    await queryInterface.bulkDelete(options);
  }
};
