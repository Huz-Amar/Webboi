var express = require('express');
var app = express();
var port = 3000;

var router = require('./app/routes');
app.use('/', router);

//static file locations
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('up and running');
})