var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'pharmac',
});

connection.connect();

// var tool = {
//     ID: '2000',
//     TOOLNAME: 'HORMUZ ORMUZ',
//     QUANTITY: '500',
//     PRICE: '11.45',
//     SUPPLIERID: '9000'
// };

var sql = "INSERT INTO ToolTable (ID, TOOLNAME, QUANTITY, PRICE, SUPPLIERID) VALUES ('3000', 'HORMUZ ORMUZ', '500', '11.45', '9000')";
connection.query(sql, function (err, result) {
    console.log("1 record inserted");
});