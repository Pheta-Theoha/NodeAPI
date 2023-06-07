"use strict";

module.exports = function (sequelize, DataTypes) {
  var student = sequelize.define('student', {
    sfirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    studentNum: {
      type: DataTypes.STRING,
      allowNull: false
    },
    enrolmentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    programme: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yearOfStudy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numOfModules: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modulesToBeRepeated: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fullTime: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {// freezeTableName: false
  });
  sequelize.sync().then(function () {
    console.log('Student table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  return student;
};