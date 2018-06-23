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
    var sql = "SELECT * FROM previous_medical_condition";
    connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    var lasti = result.length-1;
    for (var i=0; i<result.length-1; i++){
        stringboi += JSON.stringify({C_ID: result[i].C_ID, Condition_Name: result[i].CONDITION_NAME, 
            Condition_Type: result[i].CONDITION_TYPE, Date_of_Diagonosis: result[i].DATE_OF_DIAGNOSIS, Cause: result[i].CAUSE}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({C_ID: result[lasti].C_ID, Condition_Name: result[lasti].CONDITION_NAME, 
        Condition_Type: result[lasti].CONDITION_TYPE, Date_of_Diagonosis: result[lasti].DATE_OF_DIAGNOSIS, Cause: result[lasti].CAUSE}, null, "\t");
    stringboi += "]";
    fs.writeFile("medicalHistory.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});



