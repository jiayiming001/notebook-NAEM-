var express = require("express");
var route = express.Router();
var path = require("path");

route.get("/", function(req, res, next){
    res.sendFile(path.join(__dirname + '/../views/next.html'));
});

module.exports = route;