var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  con.query("CREATE DATABASE pharmac", function (err, result) {
    console.log("Database created");
  });
});