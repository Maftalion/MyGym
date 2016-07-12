var mongoose = require('mongoose');
var fs = require('fs');
var _ = require('underscore')
//Connect to database
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/myGym');

// //Create exercise schema

var exerciseSchema = new Schema({
	Exercise : 'String',
	Equipment: 'String',
	Level: 'String',
	Guide: 'String',
	Muscle: 'String',
	Image: 'String'
});


// //Compile model
var Exercise = mongoose.model('Exercise', exerciseSchema);


//Populate database with Exercises--->

// fs.readFile('/Users/maftalion/Desktop/2016-06-mvp/Client/app/exercises.json','utf8', (err, data) => {
//   if (err) throw err;
//   data = JSON.parse(data)
//   // console.log(data[1])
//   _.each(data, function(item){
//   	new Exercise({
//   		Exercise: item['Excercise'],
//   		Muscle: item['Muscle'],
//   		Equipment: item['Equipment'],
//   		Level: item['Level'],
//   		Guide: item['Guide'],
//   		Image: item['Images'][0]
//   	}).save(function(err){
//   		if (err) {console.log(err)
//   		} else {
//   			console.log('success')
//   		}
//   	})
//   })
// })





module.exports = Exercise;