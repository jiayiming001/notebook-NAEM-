var express = require("express");
var router = express.Router();
var path = require('path');


var views = path.join(__dirname + '/../views');

router.get("/index", function(req, res, next){
    res.sendFile(views + "/index.html")    
});

router.get("/json",function(req, res, next){
    var data = {
        "sites": [
            {
                "Name": "菜鸟教程",
                "Url": "www.runoob.com",
                "Country": "CN"
            },
            {
                "Name": "Google",
                "Url": "www.google.com",
                "Country": "USA"
            },
            {
                "Name": "Facebook",
                "Url": "www.facebook.com",
                "Country": "USA"
            },
            {
                "Name": "微博",
                "Url": "www.weibo.com",
                "Country": "CN"
            }
        ]
    };
    res.json(data);
})


router.get("/json2", function(req, res, next){
    var data = {
        "records":[
        {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"},
        {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"},
        {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"},
        {"Name":"Around the Horn","City":"London","Country":"UK"},
        {"Name":"B's Beverages","City":"London","Country":"UK"},
        {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"},
        {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"},
        {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"},
        {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"},
        {"Name":"Bon app'","City":"Marseille","Country":"France"},
        {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"},
        {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"},
        {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"},
        {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"},
        {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"}
        ]};
    res.json(data);
})

router.get("/db", function(req, res, next){
    const db = require("monk")("localhost:27017/jiayi");
    const col = db.get("user");
    res
});
    
module.exports = router;