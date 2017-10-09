// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Post = sequelize.define("post", {
    code: {
    type: Sequelize.STRING
    },
  author: {
    type: Sequelize.TEXT
  },
  body: {
    type: Sequelize.TEXT
  },
  created_at: {
    type: Sequelize.DATE
  }, 
}, {
  timestamps: false
});
// Syncs with DB
Post.sync();

module.exports = Post;
