const controllers = {}

controllers.user = require('./user');
controllers.node = require('./nodes');
controllers.institude = require('./institude');
controllers.candidate = require('./candidate');
controllers.patient = require('./patient');
controllers.student = require('./student');
controllers.tourism = require('./tourism');
controllers.logs_docs = require('./logs_docs');
controllers.votes = require('./votes');

module.exports = controllers;