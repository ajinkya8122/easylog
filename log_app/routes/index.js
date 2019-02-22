var express = require('express'),
    router  = express.Router(),
    mysql   = require('mysql');


//INDEX 
router.get("/", function(req, res){
    res.render("landing"); 
});

//LOGS ROUTE
router.get("/logs", function(req, res){
    var connection = mysql.createConnection({
      host:    'localhost',
      user:    'ajinkya8122',
      database: 'log_app'
    });
    var q ='SELECT id, reps, weight, DATE_FORMAT(created_at, "%d-%m-%y %h:%i %p") AS created_date FROM logs';
    connection.query(q, function(err, result){
        if(err) throw err;
        console.log(result);
        res.render("logs", {logs: result});
    });
});


//NEW LOG
router.get("/logs/new", function(req, res) {
   res.render("new");
});
//CREATE LOG
router.post("/logs", function(req, res){
    res.send("This is the post route!");
});


module.exports = router;