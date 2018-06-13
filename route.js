//require express
var express = require('express');
var router = express.Router();
module.exports = router;

// This responds with "Hello World" on the homepage
router.get('/homepage', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.sendFile(path.join(__dirname + '/homepage.html'));
})

// This responds a GET request for the /list_user page.
router.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
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