var express = require('express');
var router = express.Router();
module.exports(router);
router.get('/', function(req, res) {
    res.send("yes is homepage");
})

router.get('/about', function(req, res) {
    res.send("on about page");
})