var express = require('express');
var path = require('path');

var router = express.Router();

module.exports= router;


router.get('/', function(req, res) {
	res.render('pages/index');
})



// const supInfoTable // = require('../public/js/STUFF');

router.get('/supplier_info', function(req, res) {
	res.render('pages/supplier_info', {supplierInfo: supInfoTable});
})



router.get('/inventory', function(req, res) {
	res.render('pages/inventory');
})



/*const cHistoryTable // = require('../public/js/STUFF');*/

router.get('/customer_history', function(req, res) {
	res.render('pages/customer_history');
})



const cTable = require('../public/js/listofClients.json');

router.get('/client_list', function(req, res) {
	res.render('pages/client_list', {clients: cTable});
})



// temp wip stuff
// when doing this for the actual database connection, should use a function to get resultSet 
// and then use that result set as
// const empTable = resultSet (???)
const empTable = require('../public/js/listOfEmployees.json');

router.get('/employees', function(req, res) {
	res.render('pages/employees', {employees: empTable});
})



const pTicketTable = require('../public/js/extractInfoPerscription.json');

router.get('/prescription_tickets', function(req, res) {
	res.render('pages/prescription_tickets', {tickets: pTicketTable});
})



const pHTable = require('../public/js/prescriptionHistory.json');

router.get('/pHistory', function(req, res) {
	res.render('pages/pHistory', {pHist: pHTable})
})

const mHTable = require('../public/js/medicalHistory.json');

router.get('/mHistory', function(req, res) {
	res.render('pages/mHistory', {mHist: mHTable})
})



router.get('/login', function(req, res) {
	res.render('pages/login');
})