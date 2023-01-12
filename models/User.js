const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
    //\\--SEPARATOR--\\//
//\\-CREATES 'user' TABLE-\\//
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.VARCHAR(30),
    },
    last_name: {
      type: DataTypes.VARCHAR(30),
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;