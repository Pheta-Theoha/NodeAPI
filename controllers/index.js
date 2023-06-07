const controllers = {}

controllers.user = require('./user');
controllers.node = require('./nodes');
controllers.institude = require('./institude');
controllers.candidate = require('./candidate');
controllers.patient = require('./patient');

module.exports = controllers;