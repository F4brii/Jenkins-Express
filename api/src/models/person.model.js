const sequelize = require('../database/database');
const { Sequelize } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("person", {
        dni: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        }
    });

    return Person;
};