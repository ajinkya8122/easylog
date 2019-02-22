var express     = require("express"),
    mysql       = require("mysql"),
    bodyParser  = require('body-parser'),
    faker       = require('faker'),
    app         = express();
    
// REQUIRING ROUTES
var indexRoutes = require("./routes/index");

// APP CONFIG
app.set("view engine", "ejs");


// USING ROUTES EXPORTED BY ROUTER
app.use("/", indexRoutes);


app.listen(process.env.PORT, function(){
    console.log("App is running!");
});





// SEEDING LOGIC

//SEEDING DATABASE
    //SEEDING USERS
// var dataUsers = [];
// for(var i=0; i<10; i++){
//     dataUsers.push([
//         faker.internet.userName(), 
//         faker.internet.email()
//         ]);
// }

//SEEDING EXERCISES - exsr_type and exsr_name
// var exseData = [
//         ['Chest', 'Incline Barbell Press'],
//         ['Back', 'Barbell rows'],
//         ['Biceps', 'DB Curls'],
//         ['Triceps', 'DB extensions'],
//         ['Hamstrings Glutes', 'Romanian Deadlifts'],
//         ['Quads', 'Barbell Squats'],
//         ['Rotator Cuff', 'RC cable extensions'],
//         ['Chest', 'Decline Barbell Press'],
//         ['Chest', 'Barbell Bench Press']
        
//     ]


// SEEDING SQL DB
    //user ajinkya8122
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'ajinkya8122',
//   database: 'log_app'
// });
// var q = 'INSERT INTO users (username, email) VALUES ?';
// connection.query(q, [dataUsers], function(err, result){
//     if(err) throw err;
//     console.log(result);
// });
// var q = 'INSERT INTO exercises (exse_type,  exse_name) VALUES ?';
// connection.query(q, [exseData], function(err, result){
//     if(err) throw err;
//     console.log(result);
// });