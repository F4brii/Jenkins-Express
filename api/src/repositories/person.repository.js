const database = require('../database/database');
const Person = database.persons;
const OP = database.Sequelize.Op;

exports.findAll = (req, res) => {
    const dni = '';
    var condition = dni ? {
        dni: {
            [Op.like]: `%${dni}%`
        }
    } : null;

    Person.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving people."
            });
        });
};

exports.savePerson = (req, res) => {
    if (!req.body.dni || !req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const person = {
        dni: req.body.dni,
        name: req.body.name
    };

    Person.create(person)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.findbyDni = (req, res) => {

    const dni = req.params.dni;

    Person.findOne({ where: { dni: dni } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving people."
            });
        });
};