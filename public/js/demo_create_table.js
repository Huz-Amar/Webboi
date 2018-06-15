var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pharmac"
});

con.connect(function(err) {
  console.log("Connected!");
  var sql = "CREATE TABLE inventory (type CHAR(1), name VARCHAR(255), info VARCHAR(255))";
  con.query(sql, function (err, result) {
    console.log("Table created");
  });
});