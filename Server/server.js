var express = require('express');
var Exercises = require('./Exercises/exerciseModel.js')
//Set up Mongoose if there is time
var mongoose = require('mongoose');

//Create express app
var app = express();

//Connect to Database
mongoose.createConnection('mongodb://localhost/myGym');

//Create static files
app.use(express.static(__dirname + '/../Client'));

//Set up http requests
app.get('/', function(req, res) {
	console.log('success')
    res.render('index');
});
app.get('/api/exercises', function(req, res) {
	Exercises.find({}).then(function(exercises){
        res.json(exercises);	
	})	
})
// app.post('/api/exercises', function(req, res){
// 	res.json({
// 		Exercise : 'Push Ups',
// 		Equipment: 'None',
// 		Level: 'Beginner',
// 		Guide: 'Do a freaking pushup foo'
// 	})
// })
//IF HAVE TIME, SET UP USERS

// app.get('/login', function(req, res) {
//   	res.render('login');
// });

// app.get('/signup', function(req, res) {
//   res.render('signup');
// });

// app.get('/logout', function(req, res) {
//   res.redirect('/'); 
// });

// app.post('/login', function(req, res) {
  	
// });

// app.post('/signup', function(req, res) {
  
// });

//Bind and listen at port
app.listen(8080, function () {
	console.log('Server is up');
});


//export for use in other files
module.exports = app;