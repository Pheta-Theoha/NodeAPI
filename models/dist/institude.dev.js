"use strict";

module.exports = function (sequelize, DataTypes) {
  var institude = sequelize.define('institude', {
    superID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    institudeName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: "Vacant"
    },
    managingAdmin: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {// freezeTableName: false
  });
  sequelize.sync().then(function () {
    console.log('Institude table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  return institude;
};