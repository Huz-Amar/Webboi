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

var sql = "CREATE TABLE pharmaceutical (stock_id INT(4), name VARCHAR(255), expiration_date VARCHAR(255), sale_price VARCHAR(255), description VARCHAR(255), dosage VARCHAR(255))";
connection.query(sql, function (err, result){
    console.log("pharm table made");
});

connection.connect();

var sql = "INSERT INTO pharmaceutical (stock_id, name, expiration_date, sale_price, description, dosage) VALUES ('Company Inc', 'Highway 37')";
