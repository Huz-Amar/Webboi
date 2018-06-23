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
var sql = "SELECT * FROM client";
connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({Client_ID: result[i].CLIENT_ID, Client_Name: result[i].CLIENT_NAME, Age: result[i].AGE, Sex: result[i].SEX, Weight: result[i].WEIGHT, Address: result[i].ADDRESS, Phone: result[i].PHONE}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({Client_ID: result[lasti].CLIENT_ID, Client_Name: result[lasti].CLIENT_NAME, Age: result[lasti].AGE, Sex: result[lasti].SEX, Weight: result[lasti].WEIGHT, Address: result[lasti].ADDRESS, Phone: result[lasti].PHONE}, null, "\t");
    stringboi += "]";
    fs.writeFile("listOfClients.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



