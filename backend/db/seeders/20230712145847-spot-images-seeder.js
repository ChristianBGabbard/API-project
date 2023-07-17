'use strict';
const {SpotImage} = require('../models')
let options = {}

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([

      {

        spotId: 1,
        url: 'https://source.unsplash.com/random/?bakerstreet',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://source.unsplash.com/random/?cherrytree',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://source.unsplash.com/random/?poohbear',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://source.unsplash.com/random/?nemo',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://source.unsplash.com/random/?city',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://source.unsplash.com/random/?wizardofoz',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://source.unsplash.com/random/?kidsplaying',
        preview: true,
      }

    ], options)

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    await queryInterface.bulkDelete(options)

  }
};
