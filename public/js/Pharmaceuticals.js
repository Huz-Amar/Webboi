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
        stringboi += JSON.stringify({Pharm_ID: result[i].PHARM_ID, Pharm_Name: result[i].NAME, 
            Pharm_Expiration_Date: result[i].EXPIRATION_DATE, Sale_Price: result[i].SALE_PRICE, Description: result[i].DESCRIPTION, Dosage: result[i].DOSAGE}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({Pharm_ID: result[lasti].PHARM_ID, Pharm_Name: result[lasti].NAME, 
        Pharm_Expiration_Date: result[lasti].EXPIRATION_DATE, Sale_Price: result[lasti].SALE_PRICE, Description: result[lasti].DESCRIPTION, Dosage: result[lasti].DOSAGE}, null, "\t");
    stringboi += "]";
    fs.writeFile("pharmaceuticalStuff.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



