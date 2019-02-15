var express = require('express'),
    router  = express.Router();


//INDEX 
router.get("/", function(req, res){
    res.render("landing"); 
});

//LOGS ROUTE
router.get("/logs", function(req, res){
   res.render("logs");
});


//NEW LOG
router.get("/logs/new", function(req, res) {
   res.render("new");
});


module.exports = router;