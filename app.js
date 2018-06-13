var express = require('express');
var app = express();
var router = require(__dirname + '/route.js');
app.use('/', router);

const http = require('http');
const fs = require('fs');
const path = require('path');



var server = app.listen(3000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})