"use strict";

var _require = require("firebase-admin"),
    database = _require.database;

module.exports = function (sequelize, DataTypes) {
  var votes = sequelize.define('votes', {
    vLastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cLastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cPosition: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {// freezeTableName: false
  }); // const votes = sequelize.define('votes' {
  //     voterID: {
  //         type: dataTypes.STRING,
  //         allowNull: false,
  //     },
  //     candidateNumber: {
  //         type: database.STRING,
  //         allowNull: false
  //     },
  //     position: {
  //         type: database.STRING,
  //         allowNull: false
  //     }
  // })

  sequelize.sync().then(function () {
    console.log('Votes table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  return votes;
};