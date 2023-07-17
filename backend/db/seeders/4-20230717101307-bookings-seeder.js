'use strict';
const {Booking} = require('../models')

let options = {}


if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Booking.bulkCreate([
        {
            spotId: 2,
            userId: 1,
            startDate: '2023-09-01',
            endDate: '2023-09-03',
        },
        {
            spotId: 1,
            userId: 2,
            startDate: '2023-09-05',
            endDate: '2023-09-10',
        },
        {
            spotId: 3,
            userId: 3,
            startDate: '2023-09-15',
            endDate: '2023-09-20',
        }
    ], options)
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings'
  await queryInterface.bulkDelete(options, null)
  }
};
