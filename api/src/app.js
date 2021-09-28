const express = require("express");
const db = require('./database/database')

const app = express();
// parse requests of content-type - application/json
app.use(express.json());

// sync database
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/persons', require('./routers/person.router'));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

module.exports = app;