var mysql = require('mysql');
var sqlCredentials = require(path.join(__dirname, '../../credentials.json'))
var connection = mysql.createConnection({
    host: 'localhost',
<<<<<<< HEAD:views/pages/demo_db_connection.js
    user: sqlCredentials.username,
    password: sqlCredentials.password,
    database: 'InventoryDB',
=======
    user: 'root',
    password: 'password',
    database: 'pharmac',
>>>>>>> 5e3c8f1a84b511fc32434d03f6c31b067c612da5:public/js/demo_db_connection.js
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