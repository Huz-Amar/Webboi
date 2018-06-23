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
        stringboi += JSON.stringify({ticket_name: result[i].TICKET_NUMBER, emp_id: result[i].EMPLOYEE_ID, client_id: result[i].CLIENT_ID, date_perscribed: result[i].DATE_PERSCRIBED, time_of_usage: result[i].TIME_OF_USAGE}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({ticket_name: result[lasti].TICKET_NUMBER, emp_id: result[lasti].EMPLOYEE_ID, client_id: result[lasti].CLIENT_ID, date_perscribed: result[lasti].DATE_PERSCRIBED, time_of_usage: result[lasti].TIME_OF_USAGE}, null, "\t");
    stringboi += "]";
    fs.writeFile("extractInfoPerscription.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



