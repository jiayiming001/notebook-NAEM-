var express = require("express");
var router = express.Router();
var path = require('path');


var views = path.join(__dirname + '/../views');

router.get("/", function(req, res, next){
    res.sendFile(views + "/index.html")    
});

module.exports = router;