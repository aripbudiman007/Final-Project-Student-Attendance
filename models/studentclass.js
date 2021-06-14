'use strict';
const {
  Model
} = require('sequelize');
const StudentController = require('../controllers/studentsController');
module.exports = (sequelize, DataTypes) => {
  class StudentClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudentClass.init({
    studentId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentClass',
  });

  StudentClass.associate = function(models) {
    StudentClass.belongsTo(models.Student, { foreignKey : 'studentId' })
    StudentClass.belongsTo(models.Class, { foreignKey : 'classId' })
  }
  return StudentClass;
};