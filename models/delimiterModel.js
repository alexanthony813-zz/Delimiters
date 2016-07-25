var mongoose = require('mongoose');

var delimitersSchema = new mongoose.Schema({
    _number: {
      type : String,
      required : true
    },
    _cldrVersion: {
      type : String,
      required : true
    },
    language: {
      type : String,
      required : true
    },
    quotationStart: {
      type : String,
      required : true
    },
    quotationEnd: {
      type : String,
      required : true
    },
    alternateQuotationStart: {
      type : String,
      required : true
    },
    alternateQuotationEnd: {
      type : String,
      required : true
    },
    _id: {
      type : String,
      required : true
    }
  });

module.exports = mongoose.model('delimiters', delimitersSchema);
