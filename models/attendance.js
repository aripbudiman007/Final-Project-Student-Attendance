'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Attendance.init({
    studentId: DataTypes.INTEGER,
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE
  }, {
    sequelize,
    hooks: {
      beforeCreate: (attendance) => {
        attendance.studentId = 1,
        attendance.checkIn = new Date()
      }
    },
    modelName: 'Attendance',
  });
  
  Attendance.associate = function(models) {
    Attendance.belongsTo(models.Student, { foreignKey : 'studentId' })
  }
  return Attendance;
};