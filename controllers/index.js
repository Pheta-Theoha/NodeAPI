const controllers = {}

controllers.user = require('./user');
controllers.node = require('./nodes');
controllers.institude = require('./institude');

module.exports = controllers;