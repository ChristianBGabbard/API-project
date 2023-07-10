"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "firstName", {
      type: Sequelize.STRING(30),
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "lastName", {
      type: Sequelize.STRING(30),
      allowNull: true,
    });

    // Add other existing columns as necessary
    await queryInterface.changeColumn("Users", "username", {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true,
    });

    await queryInterface.changeColumn("Users", "email", {
      type: Sequelize.STRING(256),
      allowNull: false,
      unique: true,
    });

    await queryInterface.changeColumn("Users", "hashedPassword", {
      type: Sequelize.STRING.BINARY,
      allowNull: false,
    });

    await queryInterface.changeColumn("Users", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });

    await queryInterface.changeColumn("Users", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "firstName");
    await queryInterface.removeColumn("Users", "lastName");

    // Rollback changes for other existing columns if necessary
    await queryInterface.changeColumn("Users", "username", {
      type: Sequelize.STRING(30),
      allowNull: false,
    });

    await queryInterface.changeColumn("Users", "email", {
      type: Sequelize.STRING(256),
      allowNull: false,
    });

    await queryInterface.changeColumn("Users", "hashedPassword", {
      type: Sequelize.STRING.BINARY,
      allowNull: false,
    });

    await queryInterface.changeColumn("Users", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });

    await queryInterface.changeColumn("Users", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
};
