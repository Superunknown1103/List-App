// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Post = require("../models/post.js");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/all", function(req, res) {

    Post.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  app.get('/', function(req, res){
    res({});
  });

  
  app.post("/api/new", function(req, res) {

    console.log("Post Data:");
    console.log(req.body);

    Post.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at,
    }).then(function(results) {
      res.end();
    });

  });

};