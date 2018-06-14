var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);

var router = require('./app/routes');
app.use('/', router);

//using ejs and express Layouts


//static file locations
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('up and running');
})