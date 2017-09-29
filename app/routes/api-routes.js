// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    var dbQuery = "SELECT * FROM posts";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

};