"use strict";

var bcrypt = require('bcrypt'); // const sequelize = require('sequelize');


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
      unique: false,
      bcrypt: true
    }
  }, {// freezeTableName: false
  });
  sequelize.sync().then(function () {
    console.log('User table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  User.beforeSave(function (user) {
    user.password = bcrypt.hashSync(user.password, 10);
  }); // const beforeDelete = User.findOne({
  //     where: {
  //         userID: "adminID1",
  //     }
  // });
  // beforeDelete.destroy();
  // sequelize.commit();

  return User;
};