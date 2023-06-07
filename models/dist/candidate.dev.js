"use strict";

module.exports = function (sequelize, DataTypes) {
  var candidate = sequelize.define('candidate', {
    fName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false
    },
    previousPos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numOfYears: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    statement: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {// freezeTableName: false
  });
  sequelize.sync().then(function () {
    console.log('Candidate table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  return candidate;
};