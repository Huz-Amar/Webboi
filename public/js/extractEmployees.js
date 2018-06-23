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
    var sql = "SELECT * FROM employee, staff WHERE emp_id=employee_id";
    connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({NAME: result[i].NAME, EMPLOYEE_ID: result[i].EMPLOYEE_ID, 
            ACCESS_LEVEL: result[i].ACCESS_LEVEL, SUPERVISOR_ID: result[i].SUPER_ID}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({NAME: result[lasti].NAME, EMPLOYEE_ID: result[lasti].EMPLOYEE_ID, 
        ACCESS_LEVEL: result[lasti].ACCESS_LEVEL, SUPERVISOR_ID: result[lasti].SUPER_ID}, null, "\t");
    stringboi += "]";
    fs.writeFile("listOfEmployees.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



