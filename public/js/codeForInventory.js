function extractInfo(){
var mysql = require('mysql');
var path = require('path');
var sqlCredentials = require(path.join(__dirname, '../../credentials.json'));

var connection = mysql.createConnection({
    host: 'localhost',
    user: sqlCredentials.username,
    password: sqlCredentials.password,
    database: 'InventoryDB',
});

connection.connect();

// var tool = {
//     ID: '2000',
//     TOOLNAME: 'HORMUZ ORMUZ',
//     QUANTITY: '500',
//     PRICE: '11.45',
//     SUPPLIERID: '9000'
// };

var sql = "SELECT * FROM ToolTable WHERE ID=3000";
connection.query(sql, function (err, result){
    //console.log(JSON.stringify(result[0].TOOLNAME));
    var fs = require('fs');
    var stringboi = "[\n"
    for (var i=0; i<result.length; i++){
        stringboi += JSON.stringify({name: result[i].TOOLNAME, quantity: result[i].QUANTITY}, null, "\t");
        stringboi += ",\n";
    }
    stringboi += JSON.stringify({a:1,b:2,c:{d:1,e:[1,2]}}, null, "\t"); 
    stringboi += "\n";
    stringboi += "]";
    fs.writeFile("sverdlovsk.json", stringboi, finished);
    function finished(err){
        console.log("all set");
    }
});
}


