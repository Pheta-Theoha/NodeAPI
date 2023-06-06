const dbConfig = require("../config/db-config");
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});


const db = {};
db.sequelize = sequelize;
db.models = {}
db.models.User = require('./user')(sequelize, Sequelize.DataTypes);
db.models.Node = require('./Nodes')(sequelize, Sequelize.DataTypes);
db.models.institude = require('./institude')(sequelize, Sequelize.DataTypes);

module.exports = db;
