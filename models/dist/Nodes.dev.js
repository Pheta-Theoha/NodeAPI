"use strict";

module.exports = function (sequelize, DataTypes) {
  var Nodes = sequelize.define('nodes', {
    superID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nodeID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {// freezeTableName: false
  });
  sequelize.sync().then(function () {
    console.log('Node table created successfully!');
  })["catch"](function (error) {
    console.error('Unable to create table : ', error);
  });
  return Nodes;
};