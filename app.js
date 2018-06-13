var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 3000;
var router = require(__dirname + '/route.js');

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use('/', router);

app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
    console.log('app.js up and running');
});