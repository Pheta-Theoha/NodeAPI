const e_dbConfig = require("../config/elections");
const Sequelize = require('sequelize');

const e_sequelize = new Sequelize(e_dbConfig.DATABASE, e_dbConfig.USER, e_dbConfig.PASSWORD, {
    host: e_dbConfig.HOST,
    dialect: e_dbConfig.DIALECT
});

const e_db = {};
e_db.sequelize = e_sequelize;
e_db.models = {};
// e_db.models.User = require('./user')(sequelize, Sequelize.DataTypes);
// e_db.models.Node = require('./Nodes')(sequelize, Sequelize.DataTypes);
// e_db.models.institude = require('./institude')(sequelize, Sequelize.DataTypes);
e_db.models.candidate = require('./candidate')(e_sequelize, Sequelize.DataTypes);
e_db.models.votes = require('./votes')(e_sequelize, Sequelize.DataTypes);

module.exports = e_db;