"use strict";

module.exports = function (sequelize, DataTypes) {
  var logs_docs = sequelize.define('logs_docs', {
    superID: {
      type: DataTypes.STRING,
      allowNull: false // unique: true

    },
    clearanceLevel: {
      type: DataTypes.INTEGER,
      allowNull: false // defaultValue: "Vacant"

    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documentation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfEntry: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    timeOfEntry: {
      type: DataTypes.TIME,
      allowNull: false
    },
    timeOfExit: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {// freezeTableName: false
  });
  sequelize.sync().then(function () {
    console.log('Logs & Docs table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  return logs_docs;
};