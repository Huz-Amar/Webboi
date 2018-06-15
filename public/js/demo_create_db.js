var mysql = require('mysql');
var sqlCredentials = require(path.join(__dirname, '../../credentials.json'));


var con = mysql.createConnection({
  host: "localhost",
  user: sqlCredentials.username,
  password: sqlCredentials.password
}); 

con.connect(function(err) {
  con.query("CREATE DATABASE pharmac", function (err, result) {
    console.log("Database created");
  });
});