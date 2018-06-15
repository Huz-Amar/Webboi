var mysql = require('mysql');
var sqlCredentials = require(path.join(__dirname, '../../credentials.json'));

var con = mysql.createConnection({
  host: "localhost",
  user: sqlCredentials.username,
  password: sqlCredentials.password,
  database: "pharmac"
});

con.connect(function(err) {
  console.log("Connected!");
  var sql = "CREATE TABLE inventory (type CHAR(1), name VARCHAR(255), info VARCHAR(255))";
  con.query(sql, function (err, result) {
    console.log("Table created");
  });
});