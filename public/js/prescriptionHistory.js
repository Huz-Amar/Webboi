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
        stringboi += JSON.stringify({C_ID: result[i].C_ID, P_ID: result[i].P_ID, 
            Date_Prescribed: result[i].DATE_PERSCRIBED, Result: result[i].RESULT, Cond_Name: result[i].COND_NAME}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({C_ID: result[lasti].C_ID, P_ID: result[lasti].P_ID, 
        Date_Prescribed: result[lasti].DATE_PERSCRIBED, Result: result[lasti].RESULT, Cond_Name: result[lasti].COND_NAME}, null, "\t");
    stringboi += "]";
    fs.writeFile("prescriptionHistory.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



