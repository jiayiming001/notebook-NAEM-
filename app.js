var express = require('express');
var Route = express.router;
var path = require("path");
var bodyParser = require('body-parser');
var multer = require('multer'); 
var cookieParser = require('cookie-parser');

app = express();
//app.set("views", path.join(__dirname + '/views'));
app.use('/static', express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
app.use("/", require("./routes/index"));

app.set("port", process.env.port || 3000);


app.param(function(param, option) {  
    return function (req, res, next, val) {  
      if (val == option) {  
        next();  
      }  
      else {  
        res.sendStatus(403);  
      }  
    }  
  }); 


app.param('id', 1337);
app.get("/user/:id", function(req, res){
    console.log(req.params.id);
    console.log(req.query);
    res.json(req.params.id);
   // res.send("ok");
});

var server = app.listen(app.get("port"), Onlisten);



function Onlisten(){
    var addr = server.address();
    var bind = typeof addr === 'string' 
        ? addr.address + '\nPipe:' + addr :
          addr.address + '\nPort: ' + addr.port;
    console.log("onlisten :", bind);
}

