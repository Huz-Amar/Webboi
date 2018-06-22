var express = require('express');
var path = require('path');

var router = express.Router();

module.exports= router;


router.get('/', function(req, res) {
	res.render('pages/index');
})



router.get('/supplier_info', function(req, res) {
	res.render('pages/supplier_info');
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


// temp wip stuff
// when doing this for the actual database connection, should use a function to get resultSet 
// and then use that result set as
// const empTable = resultSet (???)
const empTable = require('../public/js/listOfEmployees.json');

router.get('/employees', function(req, res) {
	res.render('pages/employees', {employees: empTable});
})



router.get('/prescription_tickets', function(req, res) {
	res.render('pages/prescription_tickets');
})



router.get('/login', function(req, res) {
	res.render('pages/login');
})