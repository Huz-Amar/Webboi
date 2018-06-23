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
var sql = "SELECT * FROM inventory_item WHERE CLEARENCE_LEVEL='C' ";
connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({Stock_ID: result[i].STOCK_ID, Supp_Name: result[i].SUPP_NAME, Inventory_Type: result[i].TYPE, Amount: result[i].Amount}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({Stock_ID: result[lasti].STOCK_ID, Supp_Name: result[lasti].SUPP_NAME, Inventory_Type: result[lasti].TYPE, Amount: result[lasti].Amount}, null, "\t");
    stringboi += "]";
    fs.writeFile("InventoryItem.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



