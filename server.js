var express = require('express');
var app = express();
var delimiter = require('./controllers/delimiterController.js');

var mongoose = require('mongoose');
var assert = require('assert');

app.use(express.static(__dirname));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(3000, function() {
    console.log('Server listening ', 3000);
});




var url = 'mongodb://localhost:27017/delimiters';
mongoose.connect('mongodb://localhost/delimiters');


require('./utils/router.js')(app, express);

exports = module.exports = app;
