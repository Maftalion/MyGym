var express = require('express');

//Set up Mongoose if there is time


//Create express app
var app = express();

//Create static files
// app.use(express.static(__dirname + '/public'));

//Set up http requests
app.get('/', function(req, res) {
  res.render('index');
});

//query workouts
app.get('/workouts', function(req, res) {
 
});

//IF HAVE TIME, SET UP USERS

app.get('/login', function(req, res) {
  	res.render('login');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.get('/logout', function(req, res) {
  res.redirect('/'); 
});

app.post('/login', function(req, res) {
  	
});

app.post('/signup', function(req, res) {
  
});

//Bind and listen at port
app.listen(1337);


//export for use in other files
module.exports = app;