var delimiter = require('./../controllers/delimiterController.js');
var helpers = require('./helpers.js');

module.exports = function(app, express) {

  //delimiter routes
  //get requests
  app.get('/api/delimiters/:prop', delimiter.getDelimiters);
  
  //update requests
  app.post('/api/delimiters/:delimiterId/:prop/:val', delimiter.editDelimiter);

};
