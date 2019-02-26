var express = require('express'),
    router  = express.Router(),
    mysql   = require('mysql');


var connection = mysql.createConnection({
  host:    'localhost',
  user:    'ajinkya8122',
  database: 'log_app'
});

//INDEX 
router.get("/", function(req, res){
    res.render("landing"); 
});

//LOGS ROUTE
router.get("/logs", function(req, res){

    var q ='SELECT id, exse_name_ref, exse_type_ref, reps, weight, DATE_FORMAT(created_at, "%d-%m-%y %h:%i %p") AS created_date FROM logs';
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
    // var email = req.body.email;
    var log = req.body.log;
    console.log(log);
    connection.query("INSERT INTO logs SET ?", log, function(err, result){
        // (exsr_type_ref, exsr_type_ref, reps, weight)
        if(err) throw err;
        console.log(result);
    });
    res.redirect("/");
});


module.exports = router;