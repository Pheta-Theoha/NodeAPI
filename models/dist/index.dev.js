"use strict";

var dbConfig = require("../config/db-config");

var Sequelize = require('sequelize');

var sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT
});
var db = {};
db.sequelize = sequelize;
db.models = {};
db.models.User = require('./user')(sequelize, Sequelize.DataTypes);
db.models.Node = require('./Nodes')(sequelize, Sequelize.DataTypes);
db.models.institude = require('./institude')(sequelize, Sequelize.DataTypes);
module.exports = db;