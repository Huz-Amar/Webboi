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

//exports.getInfo = function(req, res){
    var sql = "SELECT * FROM perscription_ticket_contains";
    connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({Ticket_Num: result[i].PERSCRIPTION_TICKET, P_ID: result[i].INVENTORY_STOCK_ID, 
            Amount: result[i].AMOUNT}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({Ticket_Num: result[lasti].PERSCRIPTION_TICKET, P_ID: result[lasti].INVENTORY_STOCK_ID, 
        Amount: result[lasti].AMOUNT}, null, "\t");
    stringboi += "]";
    fs.writeFile("prescriptionTicketContains.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



