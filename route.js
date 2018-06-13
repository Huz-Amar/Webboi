//require express
var express = require('express');
var router = express.Router();
var path = require('path');
module.exports = router;

// This responds with "Hello World" on the homepage
router.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.sendFile(path.join(__dirname + '/index/homepage.html'));
})

// This responds a GET request for the /list_user page.
router.get('/trial', function (req, res) {
   console.log("Got a GET request for /trial.html");
   res.sendFile(path.join(__dirname + '/index/trial.html'));
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
router.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

// IDK
router.get('/Dan', function(req, res) {   
    console.log("Got a GET request for /Dan");
    res.sendFile(path.join(__dirname + '/Dan.html'));
 })