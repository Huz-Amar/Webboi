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

router.get('/client_list', function(req, res) {
    res.render('pages/client_list');
})

router.get('/employees', function(req, res) {
    res.render('pages/employees');
})

router.get('/prescription_history', function(req, res) {
    res.render('pages/prescription_history');
})