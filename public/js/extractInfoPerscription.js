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

var sql = "SELECT * FROM perscription_ticket";
connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({Ticket_Number: result[i].TICKET_NUMBER, Emp_ID: result[i].EMPLOYEE_ID, C_ID: result[i].CLIENT_ID, Ticket_Date_Prescribed: result[i].DATE_PERSCRIBED, Time_of_Usage: result[i].TIME_OF_USAGE}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({Ticket_Number: result[lasti].TICKET_NUMBER, Emp_ID: result[lasti].EMPLOYEE_ID, C_ID: result[lasti].CLIENT_ID, Ticket_Date_Prescribed: result[lasti].DATE_PERSCRIBED, Time_of_Usage: result[lasti].TIME_OF_USAGE}, null, "\t");
    stringboi += "]";
    fs.writeFile("extractInfoPerscription.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



