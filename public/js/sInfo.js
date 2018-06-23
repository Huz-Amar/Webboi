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
    var sql = "SELECT * FROM supplier";
    connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({Supplier_Name: result[i].SUPPLIER_NAME, Supplier_Location: result[i].LOCATION, 
            Supplier_Phone: result[i].PHONE}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({Supplier_Name: result[lasti].SUPPLIER_NAME, Supplier_Location: result[lasti].LOCATION, 
        Supplier_Phone: result[lasti].PHONE}, null, "\t");
    stringboi += "]";
    fs.writeFile("sInfo.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



