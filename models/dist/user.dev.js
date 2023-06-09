"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('users', {
    superID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    userID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  }, {// freezeTableName: false
  });
  sequelize.sync().then(function () {
    console.log('User table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  return User;
};