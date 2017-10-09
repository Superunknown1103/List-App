// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
const Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("posts", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


// Exports the connection for other files to use
module.exports = sequelize;