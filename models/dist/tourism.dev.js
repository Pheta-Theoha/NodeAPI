"use strict";

module.exports = function (sequelize, DataTypes) {
  var tourism = sequelize.define('tourism', {
    tFirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tLastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrival: {
      type: DataTypes.DATE,
      allowNull: false
    },
    departure: {
      type: DataTypes.DATE,
      allowNull: false
    },
    stay: {
      type: DataTypes.STRING,
      allowNull: false
    },
    places: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    international: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {// freezeTableName: false
  });
  sequelize.sync().then(function () {
    console.log('Tourism table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  return tourism;
};