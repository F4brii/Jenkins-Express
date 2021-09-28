const { database } = require('../config/config');
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        port: 5432,
        dialect: 'postgres'
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.persons = require('../models/person.model')(sequelize, Sequelize);

module.exports = db;