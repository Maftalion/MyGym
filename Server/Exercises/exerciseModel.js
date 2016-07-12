var mongoose = require('mongoose');
//Connect to database
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/myGym');

// //Create exercise schema

var exerciseSchema = new Schema({
	Exercise : 'String',
	Equipment: 'String',
	Level: 'String',
	Guide: 'String'
});


// //Compile model
var Exercise = mongoose.model('Exercise', exerciseSchema);


// new Exercise({
// 	Exercise : 'Push Ups',
// 	Equipment: 'None',
// 	Level: 'Beginner',
// 	Guide: 'Do a freaking pushup foo'
// }).save(function (err) {
//   if (err) {console.log(err)
//   } else {
//   	console.log('Success')
//   }
// })





module.exports = Exercise;