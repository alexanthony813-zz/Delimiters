var Delimiter = require('../models/delimiterModel.js');
var Q = require('q');
var helpers = require('../utils/helpers.js');
var flatten = helpers.flatten;

var updateDelimiter = Q.nbind(Delimiter.update, Delimiter);
var createDelimiter = Q.nbind(Delimiter.create, Delimiter);
var findDelimiters = Q.nbind(Delimiter.find, Delimiter);

module.exports = {

  /*
    Input
    Output

  */
  addDelimiter: function(obj){
    var delimiter = flatten(obj);
    
    createDelimiter(delimiter)
    .then(function(newDelimiter){
        console.log(newDelimiter);
    })
    .fail(function(err){
        next(err);
    });
  },


  editDelimiter: function(req, res, next){
  
      var delimiterCondition = { _id : req.params.delimiterId };
      var $set = { $set: {} };
      $set.$set[req.params.prop] = req.params.val;
      // update[res.body.prop] = res.body.val;
      // var delimiterUpdate = { $set : update };
      updateDelimiter(delimiterCondition, $set)
      .then(function(ue){
          res.header("Access-Control-Allow-Origin", "localhost:3000");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          res.sendStatus(202); //update the event playercount
      })
      .fail(function(err){
          console.error(new Error('Could not update event'));
      });
  },

  /*
    Input
    Output

   */
  getDelimiters: function (req, res, next) {
    var delimiterCondition = {};
    delimiterCondition[req.params.prop] = { $exists: true };

    findDelimiters(delimiterCondition)
    .then(function (delimiters) {
        res.header("Access-Control-Allow-Origin", "localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json(delimiters);
    })
    .fail(function (error) {
        next(error);
    });
  }


};
