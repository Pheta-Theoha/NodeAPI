const h_dbConfig = require("../config/hospitality");
const Sequelize = require('sequelize');

const h_sequelize = new Sequelize(h_dbConfig.DATABASE, h_dbConfig.USER, h_dbConfig.PASSWORD, {
    host: h_dbConfig.HOST,
    dialect: h_dbConfig.DIALECT
});

const h_db = {};
h_db.sequelize = h_sequelize;
h_db.models = {};
// e_db.models.User = require('./user')(sequelize, Sequelize.DataTypes);
// e_db.models.Node = require('./Nodes')(sequelize, Sequelize.DataTypes);
// e_db.models.institude = require('./institude')(sequelize, Sequelize.DataTypes);
h_db.models.candidate = require('./patient')(h_sequelize, Sequelize.DataTypes);

module.exports = h_db;