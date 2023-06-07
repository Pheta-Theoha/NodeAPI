const t_dbConfig = require("../config/tourism");
const Sequelize = require('sequelize');

const t_sequelize = new Sequelize(t_dbConfig.DATABASE, t_dbConfig.USER, t_dbConfig.PASSWORD, {
    host: t_dbConfig.HOST,
    dialect: t_dbConfig.DIALECT
});

const t_db = {};
t_db.sequelize = t_sequelize;
t_db.models = {};
// e_db.models.User = require('./user')(sequelize, Sequelize.DataTypes);
// e_db.models.Node = require('./Nodes')(sequelize, Sequelize.DataTypes);
// e_db.models.institude = require('./institude')(sequelize, Sequelize.DataTypes);
t_db.models.tourism = require('./tourism')(t_sequelize, Sequelize.DataTypes);

module.exports = t_db;