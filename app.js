var express = require('express');
var app = express();
var port = 3000;

var router = require('./app/routes');
app.use('/', router);

app.listen(port, function() {
    console.log('up and running');
})