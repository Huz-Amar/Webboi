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
var sql = "SELECT * FROM employee"
connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({employee_id: result[i].EMPLOYEE_ID, user: result[i].USER, password: result[i].PASSWORD, access_level: result[i].ACCESS_LEVEL}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({employee_id: result[lasti].EMPLOYEE_ID, user: result[lasti].USER, password: result[lasti].PASSWORD, access_level: result[lasti].ACCESS_LEVEL}, null, "\t");
    stringboi += "]";
    fs.writeFile("extractLoginInfo.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



