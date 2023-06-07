"use strict";

var election = require("../config/election");

var Sequelize = require('sequelize');

var e_sequelize = new Sequelize(election.DATABASE, election.USER, election.PASSWORD, {
  host: election.HOST,
  dialect: election.DIALECT
});
var e_db = {};
e_db.sequelize = e_sequelize;
e_db.models = {};
e_db.models.candidate = require('./candidate')(e_sequelize, Sequelize.DataTypes);
module.exports = e_db;