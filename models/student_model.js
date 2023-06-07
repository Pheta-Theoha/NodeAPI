const s_dbConfig = require("../config/studentReg");
const Sequelize = require('sequelize');

const s_sequelize = new Sequelize(s_dbConfig.DATABASE, s_dbConfig.USER, s_dbConfig.PASSWORD, {
    host: s_dbConfig.HOST,
    dialect: s_dbConfig.DIALECT
});

const s_db = {};
s_db.sequelize = s_sequelize;
s_db.models = {};
// e_db.models.User = require('./user')(sequelize, Sequelize.DataTypes);
// e_db.models.Node = require('./Nodes')(sequelize, Sequelize.DataTypes);
// e_db.models.institude = require('./institude')(sequelize, Sequelize.DataTypes);
s_db.models.student = require('./student')(s_sequelize, Sequelize.DataTypes);

module.exports = s_db;