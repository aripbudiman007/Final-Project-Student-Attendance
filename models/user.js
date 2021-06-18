'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    passowrd: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    hooks:{
      beforeRestore: (user) => {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(user.passowrd, salt)
        user.passowrd = hash
      }
    },
    modelName: 'User',
  });
  return User;
};