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
    var sql = "SELECT * FROM supplier_delivers";
    connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({Suppstock_ID: result[i].SUPPSTOCK_ID, Supp_Delivery_Name: result[i].SUPPLIER_DElIVERY_NAME, 
            Delivery_Date: result[i].DATA, Delivery_Price: result[i].PRICE, Delivery_Amount: result[i].AMOUNT}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({Suppstock_ID: result[i].SUPPSTOCK_ID, Supp_Delivery_Name: result[i].SUPPLIER_DElIVERY_NAME, 
        Delivery_Date: result[i].DATA, Delivery_Price: result[i].PRICE, Delivery_Amount: result[i].AMOUNT}, null, "\t");
    stringboi += "]";
    fs.writeFile("deliveries.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



