var path = require('path');
var bodyParser = require("body-parser");
module.exports = function(app) {
// // // handles ?code= parameter in the URL
app.get('/a', function(req, res){
     var code = req.query.code;
     var sessionData = req.session;
    if(code) {
        sessionData.code = code;
    } else if (!sessionData.code){
    }
    // Post.findAll({
    //   where: {
    //  code: id
    //  }
    // }).then(function(){
    //   // document.getElementById('id01').style.visibility = "hidden";
    //   console.log(results);
    // })
    res.sendFile(path.resolve('app/public/index.html'));
    console.log('hi');
});
};