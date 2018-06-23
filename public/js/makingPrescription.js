function makePrescription(ticnum, empid, cid, dateperscribed, timeofusage){

var mysql = require('mysql');
var path = require('path');
var sqlCredentials = require(path.join(__dirname, '../../credentials.json'));

var connection = mysql.createConnection({
    host: 'localhost',
    user: sqlCredentials.username,
    password: sqlCredentials.password,
    database: 'pharmac',
});

connection.connect();

    var sql = "INSERT INTO perscription_ticket (TICKET_NUMBER, EMPLOYEE_ID, CLIENT_ID, DATE_PERSCRIBED, TIME_OF_USAGE) VALUES (ticnum, empid, cid, dateperscribed, timeofusage)";
    connection.query(sql, function (err, result){
        
    });

}

function makePrescriptionTicket(pertic, invenstockid, amount){

var mysql = require('mysql');
var path = require('path');
var sqlCredentials = require(path.join(__dirname, '../../credentials.json'));

var connection = mysql.createConnection({
    host: 'localhost',
    user: sqlCredentials.username,
    password: sqlCredentials.password,
    database: 'pharmac',
});

connection.connect();

    var sql = "INSERT INTO perscription_ticket_contains (PERSCRIPTION_TICKET, INVENTORY_STOCK_ID, AMOUNT) VALUES (pertic, invenstockid, amount)";
    connection.query(sql, function (err, result){
        
    });

}
