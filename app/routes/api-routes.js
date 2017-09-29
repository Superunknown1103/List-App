// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/all", function(req, res) {

    var dbQuery = "SELECT * FROM posts";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

app.post("/api/new", function(req, res) {
    
        console.log("Post Data:");
        console.log(req.body);
    
        var dbQuery = "INSERT INTO post (author, body, created_at) VALUES (?,?,?)";
    
        connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
          console.log("Post Successfully Saved!");
          res.end();
        });
    
      });
    
    };