"use strict";
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../db/models");

class User extends Model {
  static associate(models) {
    // define association here
  }
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        len: [4, 30],
      },
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false,
      validate: {
        len: [3, 256],
        isEmail: true,
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60],
      },
    },
  },
  {
    sequelize,
    modelName: "User",
    defaultScope: {
      attributes: {
        exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
      },
    },
  }
);

module.exports = User;
