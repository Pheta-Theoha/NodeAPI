"use strict";

var _require = require("firebase-admin"),
    database = _require.database;

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
    },
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
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
    console.log('Candidate table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  return candidate;
};