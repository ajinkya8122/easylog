var express     = require("express"),
    mysql       = require("mysql"),
    bodyParser  = require('body-parser'),
    app         = express();
    
    
// APP CONFIG
app.set('view-engine', 'ejs');

//user ajinkya8122
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'ajinkya8122',
   database: 'log_app'
});

var q = 'SELECT * FROM users';

connection.query(q, function(err, results, fields){
    if(err) throw err;
    console.log(results);
});


//ROUTES
app.get("/", function(req, res){
    res.send("this is home!"); 
});

app.listen(process.env.PORT, function(){
    console.log("App is running!")
});