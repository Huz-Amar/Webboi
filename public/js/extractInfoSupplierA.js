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
var sql = "SELECT * FROM supplier_delivers, supplier, pharmaceutical, inventory_item WHERE CLEARENCE_LEVEL='A' AND SUPP_NAME=SUPPLIER_NAME AND SUPPLIER_NAME=SUPPLIER_DElIVERY_NAME AND STOCK_ID=PHARM_ID";
connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({supplier_name: result[i].SUPPLIER_NAME, supplies: result[i].NAME, location: result[i].LOCATION, phone_number: result[i].PHONE, amount_delivered: result[i].AMOUNT}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({supplier_name: result[lasti].SUPPLIER_NAME, supplies: result[lasti].NAME, location: result[lasti].LOCATION, phone_number: result[lasti].PHONE, amount_delivered: result[lasti].AMOUNT}, null, "\t");
    stringboi += "]";
    fs.writeFile("extractInfoSupplierA.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



