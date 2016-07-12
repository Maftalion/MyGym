var fs = require('fs')
var _ = require('underscore')

fs.readFile('/Users/maftalion/Desktop/2016-06-mvp/Client/app/workouts.json','utf8', (err, data) => {
  if (err) throw err;
  var data = JSON.parse(data);
  var data2 = [];
  _.each(data, function(item){
  	for (var key in item) {
  		data2.push({
  			Excercise: key,
  			Equipment: item['key'],
  			Level: key.Level,
  			Guide: key.guide,
  			Images: [key.pic_left, key.pic_right]
  		});
  	}
  })
  console.log(data2)
});