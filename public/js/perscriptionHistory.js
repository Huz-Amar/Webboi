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
var sql = "SELECT * FROM previous_perscription";
connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({name: result[i].CLIENT_NAME, clientID: result[i].CLIENT_ID, age: result[i].AGE, weight: result[i].WEIGHT, address: result[i].ADDRESS, phone: result[i].PHONE}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({name: result[lasti].CLIENT_NAME, clientID: result[lasti].CLIENT_ID, age: result[lasti].AGE, weight: result[lasti].WEIGHT, address: result[lasti].ADDRESS, phone: result[lasti].PHONE}, null, "\t");
    stringboi += "]";
    fs.writeFile("listOfClients.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



