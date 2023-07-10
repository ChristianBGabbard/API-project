"use strict";
const { Model, Validator } = require("sequelize");


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
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error("Cannot be an email.");
          }
        }
      }
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
