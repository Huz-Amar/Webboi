var express = require('express');
var app = express();

const http = require('http');
const fs = require('fs');
const path = require('path');

// This responds with "Hello World" on the homepage
app.get('/homepage', function (req, res) {
   console.log("Got a GET request for the homepage");
    res.sendFile(path.join(__dirname + '/homepage.html'));
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

// IDK
app.get('/Dan', function(req, res) {   
    console.log("Got a GET request for /Dan");
    res.send('yeety heety');
 })

var server = app.listen(3000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})