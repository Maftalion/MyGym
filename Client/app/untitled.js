var fs = require('fs')
var _ = require('underscore')

fs.readFile('/Users/maftalion/Desktop/2016-06-mvp/Client/app/workouts.json','utf8', (err, data) => {
  if (err) throw err;
  var data = JSON.parse(data);
  var data2 = [];
  // console.log(data[0])
  // var data3 = Object.keys(data[0])[0]
  // console.log(data[0][data3])
  _.each(data, function(item){
  	for (var key in item) {
      data2.push({
       Excercise: key,
       Muscle: item[key]['Main Muscle Worked'],
       Equipment: item[key]['Equipment'],
       Level: item[key]['Level'],
       Guide: item[key]['guide'],
       Images: [item[key]['pic_left'], item[key]['pic_right']]
      });
    }
  })
      
      // console.log(data2)
      fs.writeFile('/Users/maftalion/Desktop/2016-06-mvp/Client/app/exercises.json', JSON.stringify(data2), 'utf8')
})  		

  // console.log()
