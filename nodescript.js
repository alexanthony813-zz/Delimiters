var fs = require('fs');
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/delimiters';
var delimiter = require('./controllers/delimiterController.js');
mongoose.connect('mongodb://localhost/delimiters');

fs.readdir('./main', function(err, files){
  files.forEach(function(file){
    if(fs.existsSync('./main/'+file+'/'+'delimiters.json')){
      fs.readFile('./main/'+file+'/'+'delimiters.json', 'utf8', function(err, data){
          delimiter.addDelimiter(JSON.parse(data)['main'])
      })
      fs.readFile('./main/'+file+'/'+'delimiters.json')
    }
  })
})