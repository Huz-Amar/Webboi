var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 3000;

//using ejs and express Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//const inventory = require('./public/js/codeForInventory');

var router = require('./app/routes');
app.use('/', router);

//static file locations
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('up and running');
})


//inventory.getInfo;