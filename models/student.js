'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  };
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  
  Student.associate = function(models) {
    Student.hasMany(models.Attendance, { foreignKey : 'studentId'})
    Student.hasMany(models.StudentClass, { foreignKey : 'studentId'})
    Student.hasOne(models.StudentPhotos, { foreignKey : 'studentId'})
  }
  return Student;
};