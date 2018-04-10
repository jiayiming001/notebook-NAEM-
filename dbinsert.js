const db = require('monk')('localhost:27017/jiayi');
const col = db.get('users');
col.insert([{name:'a'},{name:'b'}], function(err, docs){
	console.log(docs);
});
db.close();

