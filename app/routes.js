var express = require('express');
var path = require('path');

var router = express.Router();

module.exports= router;

router.get('/', function(req, res) {
    res.render('pages/index');
})

router.get('/inventory', function(req, res) {
    res.render('pages/inventory');
})

router.get('/customer_history', function(req, res) {
    res.render('pages/customer_history');
})

