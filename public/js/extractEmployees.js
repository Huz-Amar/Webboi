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
        stringboi += JSON.stringify({Emp_Name: result[i].NAME, Employee_ID: result[i].EMPLOYEE_ID, 
            Access_Level: result[i].ACCESS_LEVEL, Super_ID: result[i].SUPER_ID}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({Emp_Name: result[lasti].NAME, Employee_ID: result[lasti].EMPLOYEE_ID, 
        Access_Level: result[lasti].ACCESS_LEVEL, Super_ID: result[lasti].SUPER_ID}, null, "\t");
    stringboi += "]";
    fs.writeFile("listOfEmployees.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



