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
var sql = "SELECT * FROM pharmaceutical";
connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({name: result[i].NAME, expiration_date: result[i].EXPIRATION_DATE, 
            sale_price: result[i].SALE_PRICE, description: result[i].DESCRIPTION, dosage: result[i].DOSAGE}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({name: result[lasti].NAME, expiration_date: result[lasti].EXPIRATION_DATE, 
        sale_price: result[lasti].SALE_PRICE, description: result[lasti].DESCRIPTION, dosage: result[lasti].DOSAGE}, null, "\t");
    stringboi += "]";
    fs.writeFile("extractInfoInventory.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});

//}

